Feature: LinkedIn

  Scenario Outline: Flow-1
    Given The user clicks the image [01KPN5XN3V70KES6VYCQ2MPAQA]
    And The user clicks on BlinqIO [01KPN5Z9JDYAF6JYCV36DFVR4X]
    And Verify element property [01KPN60MJK9HX75VBJJ5VH9K4Z]
    And Verify text "Software Development" is found in the page [01KPN614KHD27B9H6GSGHV8QJB]
    And Verify element property [01KPN61WPE85E4GTRZDZ9HGBR8]
    And Verify text "Privately Held" is found in the page [01KPN62G4296CF5D6S2X1NY9NP]
    And Verify text "US$ 5.0M" is found in the page [01KPN62V6NPDYAGE8SZM18QHTV]
    And The user clicks the text [01KPN634ZH6JKS2NDMA8QSHMJ2]
    And The user clicks on People [01KPN63Q2S1XTTE5PHBANX01N9]
    And The user logs in with credentials [01KPN63X692Y9HYE1X15CHD6K9]
      """
      {
        "email_or_phone": "{{faker:internet.email()}}",
        "password": "iudfhwb"
      }
      """
    And The user clicks the image 2 [01KPN64GJYDA1SRCH5ZJEX5B1D]

  Examples:
    | email_or_phone             | password |
    | {{faker:internet.email()}} | iudfhwb  |

  Scenario Outline: Flow-2
    Given The user views all employees [01KPN67Y4ZEF5S4Z5P5MFZTGQM]
    And Sleep [01KPN6PJB1PHXQ0EZ6BDNV06CV]
    And The user navigates back to the previous page [01KPN68K7G1W0030PXXDWKFCMG]
    And The user navigates to the About us section [01KPN68V3P5YV91ERTEVXP729P]
    And The user opens the Piece it together Patches section [01KPN69NM3Z3TWV5RA652XAP5T]
    And Verify text "Patches" is found in the page [01KPN6A5Q8E9G2CC3SWR6WZT8C]
    And Verify text "Piece it together" is found in the page [01KPN6ADRMD3JNAWFTEDS112KG]

  Scenario Outline: Flow-3
    Given The user clicks to show more similar jobs [01KPN6Y005WC4EEMDS06A0HYWR]
    And Verify text "Funding" is found in the page [01KPN6ZEKR7ZH0G8A6EBCWN7N8]
    And Verify element property [01KPN6ZY1HMW1H94R6Q54FTBWY]
    And The user clicks to see more info on Crunchbase [01KPN709BH9K72KHVGBTJGP59A]
    And The user reloads the page [01KPN70JBY8DDEJEP5S6984J0H]
    And The user reloads the page 2 [01KPN70ZA865PTMAT602VBQR8S]
    And The user reloads the page 2 [01KPN70ZB3BG8RD22MNW5P42GH]
    And The user reloads the page 2 [01KPN71V49N1MRBA3WRRGNF4CQ]
    And The user reloads the page 2 [01KPN71V4R4HK8W75EZ8S7EH5P]
    And The user reloads the page 2 [01KPN71V7KWYSZPN1R92WAWWJQ]
    And The user reloads the page 2 [01KPN73TQK4N8N09H6CRB2V5GG]
    And The user reloads the page 3 [01KPN73TR6VERDKEFJ09KH7RBF]
    And The user reloads the page 4 [01KPN73TTT9ZZK45R3ADPFRGFM]
    And The user reloads the page 5 [01KPN73V3E19MA4H0AF6G9085Y]
    And The user reloads the page 6 [01KPN73V7QT7700PX9DZE3EY00]

  Scenario Outline: Flow-4
    Given The user clicks the sign in link [01KPN78TXS4DR4ZG4FXSEX17AJ]
    And The user accepts the prompt [01KPN79RMZDC1P9FMA6CJ4XMVQ]
    And Verify text "Software Development" is found in the page [01KPN7A43EANA7X6MC0DD9857D]
    And The user clicks the image [01KPN7B8JEHNQ604A7E6V45HE9]
    And The user opens the legal section [01KPN7BE1DCW8B8V5398FKBSC1]
    And Verify text "Legal assistant" is found in the page [01KPN7BV7S6H0WEA4M3FA00FFV]
    And Verify text "Gernandt & Danielsson" is found in the page [01KPN7CQY6V6JZ1KH0B2222HVA]
    And Verify text "Get notified when a new job is posted." is found in the page [01KPN7D0AD5EQR8H10KKJ7BWY1]
    And The user searches for a job title or company [01KPN7DQC1E5B0KHHZHY328TS2]
      """
      {
        "search_job_title_or_company": "Marketing"
      }
      """
    And The user opens the learning section [01KPN7EME4SKVYXF6D8BHYJF96]

  Examples:
    | search_job_title_or_company |
    | Marketing                   |

  Scenario Outline: Flow-5
    Given The user opens the profile [01KPN7NJN5X1VKADE8WMAXYRD5]
    And The user clicks the text element [01KPN7PDE7VAV5X32EZQKWXMMS]
    And Verify text "Guy Arieli" is found in the page [01KPN7PW56C0KRXFDV5YR2SGTK]