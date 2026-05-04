Feature: WebFlow

  Scenario Outline: Flow-1
    Given The user clicks on Sort by [01KPQEXJMM5XSPB54701BK12NY]
    And The user filters by popular sites [01KPQEYF4BP0NFP76XH511ADD8]
    And The user searches with search details [01KPQF1SMV1T41NJQNSNCV7N2V]
      """
      {
        "search_query": "Best "
      }
      """
    And The user searches with search criteria [01KPQF49800DZPWQF8PXB8ESBR]
      """
      {
        "search_query_2": "Best Animation"
      }
      """
    And The user selects the first available site [01KPQF4ASE1J3RAXN23R67K4TM]

  Examples:
    | search_query | search_query_2 |
    | Best         | Best Animation |

  Scenario Outline: Flow-2
    Given The user navigates to the Animation page [01KPQFM97JEJN9SE6NRMJHT5HR]
    And The user opens the pre load animation section [01KPQFMX0MF5SQPRFSXB7FTF1C]
    And The user clicks on Animation [01KPQFMZYWSJ6Y5YH62Y8VJN1F]
    And The user clicks on Svg Animation [01KPQFN1YRWB415CSE2PQK8YKQ]
    And The user clicks on Interactions [01KPQFN3GB4K9WG8YT7JM70ZZC]
    And The user clicks on User Interaction [01KPQFN4SSP2H5G2VJ602G9ZZM]
    And The user clicks on Ecommerce [01KPQFNA5Z49A2JGG2S0RFZ6BQ]

  Scenario Outline: Flow-3
    And The user performs a page action or assertion 2 [01KPQN0T0RRBCNBS64VKKG8GMB]
    And The user performs a page action or assertion 3 [01KPQN53FY7A4R6NQMQFJE52YP]
    And The user performs a page action or assertion 4 [01KPQNRW52EHHDRR32FRPE93DY]
    And The user clicks on the first site in the results [01KPQQ3443YKZA3B5GB8WBW43Q]

  Scenario Outline: New Test 1