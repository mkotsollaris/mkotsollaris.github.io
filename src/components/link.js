import React from 'react'
import GatsbyLink from 'gatsby-link'

const Link = ({children, to, ...other}) => {
     return  <GatsbyLink to={to} {...other}>
        {children}
      </GatsbyLink>
   
}

export default Link
