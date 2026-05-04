Feature: QA brains

  Scenario Outline: Login Flow
    Given The user performs a page action [01KPD3A4BTYN21SDGWW2PVPN90]
    And The user clicks the login option [01KPD3DFGKFT3XGH55VFC8EJAB]
    And Verify text "Login Successful" is found in the page [01KPD3DMBARX3TN9508ZZHQHFT]
    And Verify text "Congratulations. You have successfully logged in. When you are done click logout below." is found in the page [01KPD3DVSFEVVJTMFWQHXX4BAD]
    And The user clicks the logout option [01KPD3E3W33X5J74N7YV5XHR8T]

  Scenario Outline: Registration Flow
    Given The user clicks on the Registration option [01KPD3H4GJHTB0JXE2TNZWHF73]
    And The user performs a page action or assertion [01KPD3HJ5GSQ0ZCM4V2F0XEEKE]
    And The user fills in the signup details [01KPD5Z8SPAEJ500P67H9Z0TK9]
      """
      {
        "account_type": "Engineer",
        "email": "manush.darhi@gmail.com",
        "password": "mamamam"
      }
      """
    And Verify text "Registration Successful" is found in the page [01KPD610R8REJPSTYYRXA57SDR]
    And Verify text "Congratulations. You have successfully logged in. When you are done click logout below." is found in the page [01KPD61JKYASY8CX81Y12ACNZJ]

  Examples:
    | account_type | email                  | password |
    | Engineer     | manush.darhi@gmail.com | mamamam  |

  Scenario Outline: Form
    Given The user clicks the Form Submission option [01KPDANVWHWGSK61ZNAFWSRKP5]
    And The user fills in the form details and submits the form [01KPDAPWXTT1KCJ1F1B8FMWF25]
      """
      {
        "full_name": "Manush Darji",
        "email": "manush.darji@blinq.io",
        "contact_number": "567890",
        "date": "2026-04-23",
        "country": "Argentina"
      }
      """

  Examples:
    | full_name    | email                 | contact_number | date       | country   |
    | Manush Darji | manush.darji@blinq.io | 567890         | 2026-04-23 | Argentina |

  Scenario Outline: Drag and Drop
    Given The user clicks on the Drag and Drop List option [01KPDAYYF1045580A8WBJK5CAA]
    And The user clicks on the Drag Me text [01KPDAZ9F5629Q4RVR9RTTR8R9]

  Scenario Outline: Ecommerce
    Given The user clicks on the E-Commerce Site text [01KPDC0MXZ38P37EMW0FX5A1C8]
    And The user clicks on the Visit Demo Site button [01KPDC5DXV0WFYRETAJQJKTTQD]
    And The user performs a page action [01KPDC5KAPK1WF0B2AF3S2CJGX]
    And The user performs a page action 2 [01KPDEZSP9H71F35M3HRC78EYZ]
    And The user performs a page action 2 [01KPDF174ATHN3QBG0X2E99NRV]
    And The user clicks on the text element [01KPDFZTM4RA2J3X95N9JR7F8V]
    And Verify text "Your cart is empty." is found in the page [01KPDF46EVEC093Z5DB47A4GXD]
    And Verify element property [01KPDF5AMFV3VAJQA8Z68CW566]

  Scenario Outline: Ecommerce(1)
    Given The user clicks on the E-Commerce Site text [01KPDG9BK65E8P6QDW1Z3QPJ0V]
    And The user clicks on the Visit Demo Site button [01KPDGBGW6VSJENVKW8BDNZG71]
    And The user performs a page action [01KPDGBSSKR6HSYE4NH2591CB7]
    And The user performs a page action 2 [01KPDGEHG137AA07AXXH7YH3C0]
    And The user navigates to the cart page [01KPDGGDB1XP1Z1NTTW3DBBK7Q]
    And The user clicks on the checkout button [01KPDGH8MRAHRN89Z3G1MN6TEG]
    And Verify text "Thank you for your order!" is found in the page [01KPDGMJZA28BVNDB0RSTN6ASV]
    And Verify element property [01KPDGPWVWTGTA18NYVRRMV0P0]