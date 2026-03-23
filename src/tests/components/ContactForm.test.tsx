import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '@/src/components/ui/ContactForm';
import { vi } from 'vitest';

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));

vi.mock('next/image', () => ({
  default: (props: Record<string, unknown>) => <img alt="" {...props} />,
}));

describe('ContactForm Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    global.fetch = vi.fn();
  });

  it('renders name, email, message fields and submit button', () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText('form.name.placeholder')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('form.email.placeholder')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('form.message.placeholder')).toBeInTheDocument();
    
    const submitBtn = screen.getByRole('button', { name: /form.submit|submitting/i });
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).not.toBeDisabled();
  });

  it('shows validation error when email is invalid', async () => {
    render(<ContactForm />);
    const emailInput = screen.getByPlaceholderText('form.email.placeholder');
    await userEvent.type(emailInput, 'invalidemail');
    
    expect(screen.getByText('emailInvalid')).toBeInTheDocument();
    const submitBtn = screen.getByRole('button', { name: /form.submit|submitting/i });
    expect(submitBtn).toBeDisabled();
  });

  it('does not trigger fetch when withSubmitLogic={false}', async () => {
    render(<ContactForm withSubmitLogic={false} />);
    const nameInput = screen.getByPlaceholderText('form.name.placeholder');
    const emailInput = screen.getByPlaceholderText('form.email.placeholder');
    const msgInput = screen.getByPlaceholderText('form.message.placeholder');
    const submitBtn = screen.getByRole('button', { name: /form.submit/i });

    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(emailInput, 'john@example.com');
    await userEvent.type(msgInput, 'Hello there');
    
    await userEvent.click(submitBtn);

    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('triggers fetch with correct data when withSubmitLogic={true}', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true })
    });

    render(<ContactForm withSubmitLogic={true} />);
    const nameInput = screen.getByPlaceholderText('form.name.placeholder');
    const emailInput = screen.getByPlaceholderText('form.email.placeholder');
    const msgInput = screen.getByPlaceholderText('form.message.placeholder');
    const submitBtn = screen.getByRole('button', { name: /form.submit/i });

    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(emailInput, 'john@example.com');
    await userEvent.type(msgInput, 'Hello there');
    
    await userEvent.click(submitBtn);

    expect(global.fetch).toHaveBeenCalledWith('/api/send-email', expect.objectContaining({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'John Doe', email: 'john@example.com', message: 'Hello there' })
    }));
  });

  it('shows success message and clears fields on successful submission', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true })
    });

    render(<ContactForm withSubmitLogic={true} />);
    const nameInput = screen.getByPlaceholderText('form.name.placeholder');
    const emailInput = screen.getByPlaceholderText('form.email.placeholder');
    const msgInput = screen.getByPlaceholderText('form.message.placeholder');
    const submitBtn = screen.getByRole('button', { name: /form.submit/i });

    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(emailInput, 'john@example.com');
    await userEvent.type(msgInput, 'Hello there');
    
    await userEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText('success')).toBeInTheDocument();
    });

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(msgInput).toHaveValue('');
  });

  it('shows error message on failed submission', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Custom error message' })
    });

    render(<ContactForm withSubmitLogic={true} />);
    const nameInput = screen.getByPlaceholderText('form.name.placeholder');
    const emailInput = screen.getByPlaceholderText('form.email.placeholder');
    const msgInput = screen.getByPlaceholderText('form.message.placeholder');
    const submitBtn = screen.getByRole('button', { name: /form.submit/i });

    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(emailInput, 'john@example.com');
    await userEvent.type(msgInput, 'Hello there');
    
    await userEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText('Custom error message')).toBeInTheDocument();
    });
  });

  it('disables button during submission', async () => {
    let resolveFetch: (value: unknown) => void;
    const fetchPromise = new Promise((resolve) => {
      resolveFetch = resolve;
    });

    (global.fetch as ReturnType<typeof vi.fn>).mockReturnValueOnce(fetchPromise!);

    render(<ContactForm withSubmitLogic={true} />);
    const nameInput = screen.getByPlaceholderText('form.name.placeholder');
    const emailInput = screen.getByPlaceholderText('form.email.placeholder');
    const msgInput = screen.getByPlaceholderText('form.message.placeholder');
    const submitBtn = screen.getByRole('button', { name: /form.submit/i });

    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(emailInput, 'john@example.com');
    await userEvent.type(msgInput, 'Hello there');
    
    await userEvent.click(submitBtn);

    expect(submitBtn).toBeDisabled();
    expect(submitBtn).toHaveTextContent('submitting');

    resolveFetch({
      ok: true,
      json: async () => ({ success: true })
    });

    await waitFor(() => {
      expect(submitBtn).not.toBeDisabled();
    });
  });
});
