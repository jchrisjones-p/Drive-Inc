import { render, screen } from '@testing-library/react';
import { EVSearch } from './search';

describe('EVSearch', () => {
    it('should render the input', () => {
        render(<EVSearch/>)
        const input = screen.getByText('Search')
        expect(input).toBeInTheDocument()
    })
})