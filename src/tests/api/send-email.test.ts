import { NextRequest } from 'next/server';
import { POST } from '@/src/app/api/send-email/route';
import { Resend } from 'resend';

vi.mock('resend', () => {
  const sendMock = vi.fn();
  return {
    Resend: class MockResend {
      emails = {
        send: sendMock
      };
    }
  };
});

vi.mock('fs', async (importOriginal) => {
  const actual = await importOriginal<typeof import('fs')>();
  return {
    ...actual,
    promises: {
      ...actual.promises,
      readFile: vi.fn().mockResolvedValue(JSON.stringify({
        title: "New message from website",
        receivedFrom: "You have received a new message from {name}",
        from: "Name:",
        email: "Email:",
        message: "Message:",
        sentFrom: "Zatas Website",
        subject: "New contact from {name}"
      }))
    }
  };
});

vi.mock('fs/promises', () => {
  return {
    readFile: vi.fn().mockResolvedValue(JSON.stringify({
      "subject": "New message from website",
      "greetings": "Hello team,",
      "intro": "You have received a new message from the contact form.",
      "nameLabel": "Name:",
      "emailLabel": "Email:",
      "messageLabel": "Message:",
      "footer": "This is an automated message."
    }))
  };
});

describe('POST /api/send-email', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.clearAllMocks();
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  function createMockRequest(body: unknown, headers: Record<string, string> = {}) {
    return new NextRequest('http://localhost:3000/api/send-email', {
      method: 'POST',
      headers: new Headers(headers),
      body: body ? JSON.stringify(body) : null
    });
  }

  it('Returns 400 when name, email, or message are missing', async () => {
    process.env.RESEND_API_KEY = 'test_key';
    process.env.FROM_EMAIL = 'test@example.com';
    const req = createMockRequest({ name: 'John Doe', email: 'john@example.com' }); // missing message
    const res = await POST(req);
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toBe('Todos os campos são obrigatórios');
  });

  it('Returns 400 when JSON body is malformed', async () => {
    process.env.RESEND_API_KEY = 'test_key';
    process.env.FROM_EMAIL = 'test@example.com';
    const req = new NextRequest('http://localhost:3000/api/send-email', {
      method: 'POST',
      body: 'invalid-json'
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toBe('Requisição JSON mal formatada');
  });

  it('Returns 500 when RESEND_API_KEY or FROM_EMAIL are not configured', async () => {
    delete process.env.RESEND_API_KEY;
    const req = createMockRequest({ name: 'John Doe', email: 'john@example.com', message: 'Hello' });
    const res = await POST(req);
    expect(res.status).toBe(500);
    const data = await res.json();
    expect(data.error).toBe('Erro interno do servidor');
  });

  it('Returns 200 when all fields are valid and Resend replies successfully', async () => {
    process.env.RESEND_API_KEY = 'test_key';
    process.env.FROM_EMAIL = 'test@example.com';
    
    const mockResendInstance = new Resend('dummy');
    vi.mocked(mockResendInstance.emails.send).mockResolvedValueOnce({
      data: { id: '123' },
      error: null
    } as unknown as { data: unknown; error: unknown });

    const req = createMockRequest({ name: 'John Doe', email: 'john@example.com', message: 'Hello' });
    const res = await POST(req);
    
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.success).toBe(true);
  });

  it('Returns 500 when Resend returns an error', async () => {
    process.env.RESEND_API_KEY = 'test_key';
    process.env.FROM_EMAIL = 'test@example.com';

    const mockResendInstance = new Resend('dummy');
    vi.mocked(mockResendInstance.emails.send).mockResolvedValueOnce({
      data: null,
      error: { message: 'Failed to send', name: 'Error' } as unknown as Error
    } as unknown as { data: unknown; error: unknown });

    const req = createMockRequest({ name: 'John Doe', email: 'john@example.com', message: 'Hello' });
    const res = await POST(req);
    
    expect(res.status).toBe(500);
    const data = await res.json();
    expect(data.error).toBe('Erro ao enviar o e-mail');
  });
});
