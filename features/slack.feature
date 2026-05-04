Feature: slack

  Scenario Outline: Slack-1
    Given The user opens the Huddles Meet using audio and video feature [01KPMX756XQV32EVKB61AB6VTC]
    And Verify text "Let your notes take themselves." is found in the page [01KPMX80D5KPGASXZPR9VJP75X]
    And The user clicks the conversation option [01KPMX8GSBYNV5F0S9SGY4W3QS]
    And Verify element property [01KPMX9WTYGBYZQZ3BZB2K1BY5]
    And The user navigates to the Engineering solutions page [01KPMXCF6NH1ADNA4SQBM6E043]
    And Verify element property [01KPMXCNQF85TSFPPQMA245HSK]
    And The user clicks the see all engineering integrations option [01KPMXDBQ1PSHAG5VNCVET1SWX]
    And The user clicks the Devin integration option [01KPMXDKZJV6EYAM08ZMS20CEM]
    And The user clicks the Sign In option [01KPMXDW1ADW80XVMSVCH578BS]

  Scenario Outline: Slack-2
    Given The user clicks on the testimonial text elements [01KPMXK9SRTW7JD6DEW1KVVNZV]
    And Verify element property [01KPMXMQ4E0KSJT5TS26RHVCEY]
    And The user clicks on the webinar watch now banner [01KPMXP0JB7MY4YG3W6YS9NCCM]
    And The user fills in the event registration details [01KPMXPMW739SBPEJBD2MJG9RM]
      """
      {
        "first_name": "Manush",
        "surname": "Darji",
        "work_email_address": "{{faker:internet.email()}}",
        "company": "123 Manush",
        "company_size": "1 - 15",
        "role": "VP",
        "phone_number": "4567899",
        "country_region": "Afghanistan"
      }
      """

  Examples:
    | first_name | surname | work_email_address         | company    | company_size | role | phone_number | country_region |
    | Manush     | Darji   | {{faker:internet.email()}} | 123 Manush | 1 - 15       | VP   | 4567899      | Afghanistan    |

  Scenario Outline: Slack-3
    Given Verify element property [01KPN3BZEPWB07FBJ0FCW24FTG]
    And Verify element property [01KPN3CWXXF29AY24AWS8NVEGH]
    And The user clicks on the Slack vs Teams option [01KPN3DPRD8RTQ1K0HGX6YG03E]
    And The user clicks on the Slack AI option [01KPN3EXTXZXBVQEZ3MMQ0T14V]
    And The user clicks on the AI in Slack content [01KPN3FA370B6N8TVWN8WPE4AB]
    And The user clicks on the Pricing option [01KPN3HY0FF9Q8ECV5WQRWHXZG]
    And The user clicks on the SCIM user management text [01KPN3J2J1ZQFTDTK6WJFW9C23]

  Scenario Outline: Slack-4
    Given New Step [01KPN5A8H041GVX6S4DKWN1W4Q]
    And The user navigates to the customer service page [01KPN5PM2YZWRHEBT6SNYJ4YCW]
    And Verify text "36%" is found in the page [01KPN5PT35HZ9NC7VT5155G5Z1]
    And Verify text "12%" is found in the page [01KPN5Q93MYJDYSX64HQE9M547]
    And Verify element property [01KPN5QE15NXZR61CW3W0BVY2Q]