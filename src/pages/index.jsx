import React from 'react'
import { Link } from 'react-router-dom'
import { Icon, Button, IconButton } from 'actify'
import Logo from '@/src/components/Logo'

export default () => {
  return (
    <div className="container flex flex-col gap-4">
      <div className="mx-auto w-80">
        <Logo width="100%" />
      </div>
      <p className="text-center text-4xl font-extrabold ">
        React Material Design 3 Components Library
      </p>
      <div className="flex items-center justify-center gap-1 sm:gap-2">
        <Link to="/getting-started/installation">
          <Button className="sm:before:content-['Get']">
            Started
            <Icon name="ArrowRight" />
          </Button>
        </Link>
        <Link to="/getting-started/why-actify">
          <Button color="secondary" className="sm:after:content-['Actify']">
            <Icon name="HelpCircle" />
            Why
          </Button>
        </Link>
        <Button
          variant="outlined"
          href="https://github.com/actifyjs/actify"
          target="_blank"
        >
          <Icon name="Github" />
          GitHub
        </Button>
      </div>
    </div>
  )
}
