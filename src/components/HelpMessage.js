import React from 'react'

const HelpMessage = () => (
  <div>
    <p>
      <strong>purchase &lt;date&gt; &lt;price&gt; &lt;currency&gt; &lt;productName&gt;</strong> - add purchase to
      store.<br/>
      <i>
        Example: purchase 2019-04-25 12 USD Photo <br/>
        Output: <br/>
        2019-04-25 <br/>
        Photo 12 USD
      </i>
    </p>
    <p>
      <strong>all</strong> - show all purchases. <br/>
      <i>
        Example: all <br/>
        Output: <br/>
        2019-04-25 <br/>
        Photo 12 USD
      </i>
    </p>
    <p>
      <strong>clear &lt;date&gt;</strong> - removes all purchases for specified date. <br/>
      <i>
        Example: clear 2019-04-25 <br/>
        Output:
      </i>
    </p>
    <p>
      <strong>report &lt;year&gt; &lt;currency&gt;</strong> - calculate the total income for specified year,
      convert
      and present it in specified currency. <br/>
      <i>
        Example: report 2019 UAH <br/>
        Output: <br/>
        356.4 UAH
      </i>
    </p>
  </div>
)

export default HelpMessage