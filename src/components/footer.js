import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from './breakpoints'

import Container from './container'

const Footer = (maxWidth) => (
  <footer
    css={css`
      background: "dark";
      color: white;
      margin-top: 70px;
    `}
  >
    <Container
      maxWidth={maxWidth}
      css={css`
        padding-top: 0;
        padding-bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        ${bpMaxSM} {
          padding-top: 0;
          flex-direction: column;
        }
      `}
    >

      <div css={{ marginTop: -40 }}>
        <br />
        <br />
      </div>

      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          div,
          img {
            margin: 50px 0;
            ${bpMaxSM} {
              margin: 20px 0;
            }
          }
          ${bpMaxSM} {
            align-items: center;
          }
        `}
      >
        <div>
          © 2022 menelaos.dev - All rights reserved.
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
