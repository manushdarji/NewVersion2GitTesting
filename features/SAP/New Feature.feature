Feature: New Feature

  Scenario Outline: New Test 1
    Given The user enters the login details and continues [01KQRQM0M0RQ81VD2NQZRJTHD4]
      """
      {
        "username_sap": "{{Username SAP}}"
      }
      """
    And The user enters the password and continues [01KQRQMSHM9ZBPB79YMQ770H5K]
      """
      {
        "password_sap": "{{Password SAP}}"
      }
      """
    And The user changes the language to Japanese [01KQRQN14TBNB7QER0SAD20GMD]
    And The user navigates to the public access trial page [01KQRQNBTR18AYM29VBPV724P7]
    And The user changes the language to English [01KQRQNBVMVH7531AYXF3V0J43]
    And The user navigates to the public access trial page 2 [01KQRQNJ8GKS1WB22H66FZEVVF]
    And The user clicks on the Analyze Sales Volume option [01KQRQNJ92C2N84M0FB1K0X334]
    And The user opens the Finance section [01KQRQP55TH5NEWHD5CH7Z5A60]

  Examples:
    | username_sap     | password_sap     |
    | {{Username SAP}} | {{Password SAP}} |

  Scenario Outline: New Test 2
    Given The user enters the login identifier and continues [01KQRQVHTD5A2MF6TMFRNBYSAG]
      """
      {
        "username_sap": "{{Username SAP}}"
      }
      """
    And The user enters the password and continues [01KQRQW7K24JHRYPKG1GQ1F7QW]
      """
      {
        "password_sap": "{{Password SAP}}"
      }
      """
    And The user clicks the Create Dispute from Underpayment option [01KQRQWC3MCRNTNRS83W5RDCKV]
    And The user clicks the Procurement option [01KQRQWPPA2DYG388E6T3RHEE8]

  Examples:
    | username_sap     | password_sap     |
    | {{Username SAP}} | {{Password SAP}} |

  Scenario Outline: API step
    Given The user sends the API request and verifies the response details [01KQRT4E1XQ42FBC03GXP7HGCJ]

  Scenario Outline: New Test 3
    Given The user enters the login information and continues [01KQRWKV305QPM246G4PANHS60]
      """
      {
        "username_sap": "{{Username SAP}}"
      }
      """
    And The user enters the password and continues [01KQRWN7X9K5XCP07J2SYYT0B3]
      """
      {
        "password_sap": "{{Password SAP}}"
      }
      """
    And The user clicks on Predictive Accounting [01KQRWRQBE7N7GJN6AGEN1XPDM]
    And The user clicks on the user profile [01KQRWRVWJG99GRZBRW34YY96G]
    And The user exits the tour [01KQRWSHNMJZ7NAW8ZCTA32Z0B]
    And The user navigates to the default values settings page [01KQRX8B7D1Z71TTKJM7G49EXZ]

  Examples:
    | username_sap     | password_sap     |
    | {{Username SAP}} | {{Password SAP}} |

  @regre
  Scenario Outline: New Test 4
    Given The user sends a POST API request and verifies the response details [01KQRY1Q14XN3ENRBF88RZJ6T9]
    And The user enters the login information and continues [01KQS2E1G4V0KBTS6TRPC5X3TD]
      """
      {
        "username_sap": "{{Username SAP}}"
      }
      """
    And The user enters the password details and continues [01KQS2EB5YF2WEEANWB0SJ2YM8]
      """
      {
        "password_sap": "{{Password SAP}}"
      }
      """
    And The user opens the Predictive Accounting page [01KQS2ENERK2VT1NGGN56KHAS8]
    And The user opens the Inbox [01KQS2GVWQ72ASF703Y0WSNZY3]
    And The user leaves the tour [01KQS2JWHPXS8ZJ0GRDN95D4YR]
    And The user opens all inbox items [01KQS2M4DAJNDGD36TTVSWJJPD]

  Examples:
    | username_sap     | password_sap     |
    | {{Username SAP}} | {{Password SAP}} |

  Scenario Outline: New Test 5
    Given The user enters the login identifier and continues [01KQS2VCNKEAYW0ZPMRVWB6KEY]
      """
      {
        "username_sap": "{{Username SAP}}"
      }
      """
    And The user enters the password and continues [01KQS2WCPE3E6C3XK23B8GQG5Q]
      """
      {
        "password_sap": "{{Password SAP}}"
      }
      """
    And The user opens the First Steps in SAP S/4HANA Cloud Public Edition content [01KQS2WRV5HBNTAK8XPDZVHZAF]
    And The user leaves the tour [01KQS2Y1TF3V7J0BH8DXKBMMKC]
    And The user opens the Project Management tile [01KQS2YMXEBTDGMNPZAR8BG5WP]
    And The user searches with the search details [01KQS2ZHJAN7FXYCVH764G451B]
      """
      {
        "search_query": "Manush dSrji"
      }
      """

  Examples:
    | username_sap     | password_sap     | search_query |
    | {{Username SAP}} | {{Password SAP}} | Manush dSrji |

  @regre
  Scenario Outline: New Test 6
    Given The user enters the login information and continues [01KQS3B2W6CMJAHNR4JB2BYAMT]
      """
      {
        "username_sap": "{{Username SAP}}"
      }
      """
    And The user enters the password information and continues [01KQS3D91282T9465MKM4TGE1C]
      """
      {
        "password_sap": "{{Password SAP}}"
      }
      """
    And The user clicks on Review your Project [01KQS3E2CBRSSK0BW0C314NAPA]
    And The user navigates to the Insights Cards section from Manage News [01KQS3EVRYVST0N3Z07CG9FPXG]

  Examples:
    | username_sap     | password_sap     |
    | {{Username SAP}} | {{Password SAP}} |

  @regre
  Scenario Outline: New Test 7
    Given The user enters the login information and continues [01KQS3SNCN9N95YT6TQHK14XWY]
      """
      {
        "username_sap": "{{Username SAP}}"
      }
      """
    And The user enters the password and continues [01KQS3VK2WTCP1HA9M2EEGW184]
      """
      {
        "password_sap": "{{Password SAP}}"
      }
      """
    And The user collapses the header [01KQS3VZJXTWN7NXT5J4TMQETC]

  Examples:
    | username_sap     | password_sap     |
    | {{Username SAP}} | {{Password SAP}} |

  Scenario Outline: New Test 8