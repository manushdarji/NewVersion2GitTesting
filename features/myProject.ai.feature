Feature: myProject.ai

  Scenario Outline: Flow-1
    Given The user selects the project owner option [01KPYZF2QEB7RNKFK1K8PJKA4T]
    And The user selects the trader option [01KPYZFQ4D0XB0NDHZMBVQ1S1G]
    And The user selects the intern option [01KPYZFTFK4172SZW9X7Y58R5P]
    And The user expands the prior construction experience question [01KPYZFWJN91H498SYKRGH868K]
    And The user clicks the apply internship option [01KPYZK417T0SRGDCW9A5TZ5RK]
    And The user searches for a county and runs the search 2 [01KPYZK9G0AP2PCAMSCMM62SRP]
      """
      {
        "county_search_term": "jerse"
      }
      """

  Examples:
    | county_search_term |
    | jerse              |

  Scenario Outline: Flow-2
    Given Hover [01KPZ03M6ZC9X9FFBJ97CX9RFK]
    And The user clicks on All Projects [01KPZ04G80SZXZM7ST944VH8DD]
    And The user sorts the projects, searches using project details, and returns to the home page [01KPZ04K4CMS1JN8XBPQTE3H7V]
      """
      {
        "search_query": "Shivakshi",
        "search_key": "Enter"
      }
      """
    And The user clicks on Blogs [01KPZ0654NYSQ0WYP4SEEM0312]
    And The user clicks on View More [01KPZ06GJTR8X12G2DMBMAJ6XR]

  Examples:
    | search_query | search_key |
    | Shivakshi    | Enter      |

  Scenario Outline: Flow-3
    Given The user navigates to the Blogs page [01KPZ0C963XGCYT9M0GGNT2JY3]
    And The user navigates to the All Projects page [01KPZ0DA0JYEJC1KY98BEBWN68]
    And The user navigates to the home page [01KPZ0DN9S2FMA4JFS7226AJ1B]
    And The user fills in the stone project details [01KPZ0DVKHP2EE4GHHN6J3PY2W]
      """
      {
        "project_name": "aise",
        "stone_type": "marble",
        "budget_amount": "3685"
      }
      """

  Examples:
    | project_name | stone_type | budget_amount |
    | aise         | marble     | 3685          |

  Scenario Outline: Flow-4, this has one step, open it
    Given New Step [01KPZ2724J9P29JN0JFX4967T8]

  Scenario Outline: Flow-5
    Given The user clicks on Send Proposals [01KPZ38ASQ049KNW5TGWET984G]
    And The user clicks on Apply Internship [01KPZ38NZ2NT6RQWCPN39J3MJY]
    And The user clicks on Apply Internship 2 [01KPZ38YER7EAV9YQ5WCDK7BW2]
    And The user selects the Trader sign in option [01KPZ39A7KNYW87YS5CWXFDWPH]

  Scenario Outline: New Test 1