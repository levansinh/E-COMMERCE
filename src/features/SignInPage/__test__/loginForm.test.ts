import { screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { beforeAll, describe, expect, it } from 'vitest';

describe('login form ', () => {
  beforeAll(async () => {
    await waitFor(() => {
      expect(screen.queryAllByPlaceholderText('name@gmail.com')).toBeInTheDocument();
    });
  });
  it('Hiển thị lỗi khi không nhập gì', async () => {
    const buttonSubmit = document.querySelector('form button[type="submit"]') as HTMLButtonElement;
    fireEvent.click(buttonSubmit);
    expect(await screen.findByAltText('')).toBeTruthy();
  });
});
