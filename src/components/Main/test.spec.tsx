import React from 'react'
import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render a heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /home page/i })
    ).toBeInTheDocument()
  })
})
