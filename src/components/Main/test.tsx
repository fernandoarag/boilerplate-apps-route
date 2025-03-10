import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // Renderiza o componente
    const { container } = render(<Main />)

    // busca o elemento e verifica a existencia dele
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    // gera snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
