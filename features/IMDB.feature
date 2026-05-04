Feature: IMDB

  Scenario Outline: ImDB-1
    Given The user reloads the page [01KPQTH14E153QVRB24NGR42RE]
    And The user reloads the page 2 [01KPQTH3MJ0Z5FM90KWG28D9CA]
    And The user selects the Titles presentation and accepts it [01KPQTH4MA9JQVP1DX8KP8Q1KF]
    And The user performs a page action or assertion [01KPQV14NZFDZZC9QVRRS6GHRJ]
    And The user clicks on MotorBike Messiah [01KPQV2FBSYVFPH55YKSJRMH7A]
    And The user clicks on Short [01KPQV3ZK0VDSJBWR20YBN1KMB]
    And The user navigates back to the previous page [01KPQV4MRDVZRQ1S1QZPW1M6YX]
    And Verify text "Sign in to create or view a list." is found in the page [01KPQV4SVGPTX0PNSB1KNNKZ49]
    And The user clicks on Top Cast edit [01KPQV63CMF72HKKR61EXAA921]
    And The user navigates to the home page [01KPQV6EG0XXX4F2YH3TTABZS0]

  Scenario Outline: ImDB-2
    Given The user reloads the page [01KPQVJ63EYGT15T5WP2PWGMG9]
    And The user reloads the page 2 [01KPQVJ8T431Z3K87B9YA1W8GG]
    And The user searches IMDb with search details [01KPQVJAEZ4EN74A4GXAAQWC36]
      """
      {
        "search_query": "Chris Evans"
      }
      """
    And The user navigates to the companies page [01KPQVK1C9JE5KD7D7VSC6C7FD]
    And The user navigates to the people page [01KPQVKEKXJCG63X9GXNHJ5HH2]
    And The user selects a person from the search results [01KPQVKRG293TSQVRYDE8KYTHP]
    And The user opens the selected persons credits page [01KPQVM1MXGZF77QBECBJW5Q7S]
    And The user navigates to the home page [01KPQVMPH6TX9EEFBD28F9QHE8]

  Examples:
    | search_query |
    | Chris Evans  |

  Scenario Outline: ImDB-3
    Given The user reloads the page [01KPQWXK4EGFSQJFCEFTJX0VP8]
    And The user reloads the page 2 [01KPQWXNSNYK3G49JK6CEC7T1K]
    And The user searches for a title [01KPQWXQT4F34JA64WC9C4VZM9]
      """
      {
        "search_query": "Project Hail "
      }
      """
    And The user reloads the page 3 [01KPQXM0P66W8Q422JPFDR4WSY]
    And The user reloads the page 2 [01KPQXM33XF6YDK607FD4KAWM4]
    And The user views our picks [01KPQXM635ZADB5JRX2F0S4X89]

  Examples:
    | search_query  |
    | Project Hail  |

  Scenario Outline: ImDB-5
    Given The user reloads the browser page [01KPQY6VV29F60E28SD8VR9GZ7]
    And The user reloads the browser page 2 [01KPQY6YCVJADRTC8AA37HFVNW]
    And The user declines and browses trailers [01KPQY6ZFXBP2757QWESY948B1]
    And Sleep [01KPQYBF4XQ06MAWA5HHTETDXS]
    And The user opens a popular trailer [01KPQY7JVSY7VCMMYYNQSY60B0]
    And The user opens the weeks ahead trailer [01KPQY8597F1JFBBXZGNM8BB6F]
    And The user attempts to play the trailer [01KPQY8FR180MKDN9ASZZC8Q8X]

  Scenario Outline: ImDB-4
    Given The user reloads the page [01KPQYJEMJQTBAP7FC18182CEB]
    And The user reloads the page 2 [01KPQYJGWGRJ644SVDFK7Q3MK2]
    And The user opens the navigation drawer and selects the What to watch menu item [01KPQYJHYP4E7AXEVC88XJDTAC]
    And The user clicks the MOST POPULAR text [01KPQYKYZ7BFQ48S6JD3RR3GBG]
    And The user clicks the Watchlist option [01KPQYM8G3N1GNZ5G93SCH7T2S]

  Scenario Outline: ImDB-6
    And The user searches for a movie on IMDb [01KPWBXMDKMFG78QP0S3H09V1V]
      """
      {
        "search_imdb_query": "top gun "
      }
      """
    And Verify text "Top Gun: Maverick" is found in the page [01KPWBZVB9WZ202FZRZQMNXFW1]

  Examples:
    | search_imdb_query |
    | top gun           |

  @imdb
  Scenario Outline: ImBD-7
    Given The user accepts and selects presentation options [01KPWFTVPENPR8X33B14WBBSW7]
    And Verify text "En vedette aujourd'hui" is found in the page [01KPWFVQXQAHWHBXQ4ZJ21XST2]
    And The user opens the presentation section [01KPWG24A45177XYYDDSQP57E6]
    And Verify text "आज फ़ीचर किया गया" is found in the page [01KPWG2ADYTPT9YAYY071DAAC0]
    And Verify text "आज फ़ीचर किया गया" is found in the page [01KPWG4VSK655V65AVPT474S72]

  Scenario Outline: ImDB-8
    Given The user searches for a title and opens the result details [01KPWGE6X7XFTNMJW92TADTSKC]
      """
      {
        "search_query": "Crime 101"
      }
      """
    And Verify element property [01KPWGG403K672XBBQE5YYQJA3]
    And Verify text "Chris Hemsworth" is found in the page [01KPWGGX348YEWRYK3MZ2EAG8S]
    And The user opens the production info on IMDbPro [01KPWGHECF4Y52YDP1141H6ESK]

  Examples:
    | search_query |
    | Crime 101    |

  Scenario Outline: New Test 1