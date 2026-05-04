Feature: try and review

  Scenario Outline: Test-1
    Given The user accepts all cookies [01KP87EYVAGGVQDATV8DWQYCWX]
    And Verify text "Discover the perks of being a Star Product tester:" is found in the page [01KP87G11V65YFC4E8NWAGAGN1]
    And Verify element property [01KP87GGPKGVRMPR5JFMQ2XMR3]
    And The user clicks on Live [01KP87H5VZSX8AZVB3DSZ7MKPG]
    And Verify element property [01KP87HAGHT89DDDZKGHQFCDTD]

  Scenario Outline: New Test 1
    Given The user clicks on the search bar and searches for Marshall 2 [01KP87W2EEA27WYS89YQ0Y80ZT]
    And The user clicks on the Marshall Monitor Headphone [01KP87YMB5CMRQQAASG4WHYGGR]
    And The user verifies the Marshall text is found on the page [01KP884WB3TNGBHA26BK527M73]
    And Verify text "Marshall" is found in the page [01KP888807456XTNQHQ2DZG8WG]
    And Verify text "Marshall" is found in the page [01KP88D7AW7EA8KAAXW0SXEHHW]

  Scenario Outline: New Test 2

  Scenario Outline: New Test 3

  Scenario Outline: New Test 4

  Scenario Outline: New Test 5

  Scenario Outline: New Test 6

  Scenario Outline: Superkicks-1
    Given The user selects the gender option [01KP8G7Y5MQEM7DCHG7F8TRBNQ]
    And The user selects the product size and adds the item to the cart [01KP8GAGT5XPS7Q7WXP1Q57Z87]

  Scenario Outline: Super demo
    Given The user clicks on Playwright-Testing [01KPAQ3GXX9NHY9BP45YGD6SWX]
    And The user fills in the form details [01KPAQ4E2XCA2MYFKTDFR6ZHMD]
    And The user selects the role [01KPAQ601J1C53XR0C00AGKYEF]
    And The user submits the form [01KPAQ9XMQGQ116GDREVWKNV16]
    And The user clicks on Show toast and verifies the action completion message [01KPAQAY4G810KZ0RRB7WYTPN1]

  Scenario Outline: Superdemo
    Given The user clicks on Playwright-Testing [01KPASQZF431B08YENEHD72G5Y]
    And The user toggles all the switches [01KPASR9RTQMG1J4AF45H66TST]
    And The user deletes the first two records from the data table [01KPASTHE4MVB504FEFCHWCW12]

  Scenario Outline: salesForce
    Given The user logs in with credentials [01KPAV8EB79YF5EGYEEE6YMQQ0]
      """
      {
        "username": "{{Username-mesha}}",
        "password": "{{Password_Mesha}}"
      }
      """
    And The user enters the verification code [01KPAV9P7YXC2AH3BV4MBTT2K4]
      """
      {
        "verification_code": "960797"
      }
      """
    And The user navigates to the accounts section [01KPAVCW5DS5YPYV00HCMXA6KP]
    And The user clicks New [01KPAVGQYW74XYM5N110VZV0GG]
    And The user enters the account details [01KPAVEB2W2R3BMJ0YTMS3K54X]
      """
      {
        "account_name": "manushdarji"
      }
      """
    And Verify text "manushdarji" is found in the page [01KPAVN41ZACTJQJ1QVRCN5C8T]

  Examples:
    | username           | password           | verification_code | account_name |
    | {{Username-mesha}} | {{Password_Mesha}} | 960797            | manushdarji  |

  Scenario Outline: salesForce(1)
    Given The user logs in with credentials [01KPAW12CBT6JP9F7SBGV324G1]
      """
      {
        "username": "{{Username-mesha}}",
        "password": "{{Password_Mesha}}"
      }
      """
    And The user verifies the code with details [01KPAW8KFQC4BNHDP3CSXDXFBF]
      """
      {
        "verification_code": "133918"
      }
      """
    And The user navigates to the Service page [01KPAW99GDPT3G5GS2T3GKVRF9]
    And The user clicks on New [01KPAWCHY0BQN0A013DRGFWBDN]
    And The user enters the case details [01KPAWADS86PPXTA93C2AW6BJ9]
      """
      {
        "subject": "this is testing"
      }
      """
    And Verify text "Drive productivity and insights with AI" is found in the page [01KPAWDNKK6SFX9SMV3EVPD0MD]
    And Verify text "Turn on Agentforce" is found in the page [01KPAWFFDAVQ26Z9BH766QDXK4]
    And The user verifies the Created By value [01KPAWJ66142NFKD8M874YZMRX]

  Examples:
    | username           | password           | verification_code | subject         |
    | {{Username-mesha}} | {{Password_Mesha}} | 133918            | this is testing |

  Scenario Outline: superDemo
    Given The user clicks on Playwright-Testing [01KPAX0GG79G1V91SSDRC84RC2]
    And The user clicks on Warning 2 [01KPAX0SY0FA6DPP8ZJN156DG7]
    And Verify text "Warning clicked" is found in the page [01KPAX1WNKR94QJFZF30Z2VJZN]
    And The user clicks on the plus icon multiple times [01KPAX2HZVX53EX1WMSY3MXDBB]
    And Verify element property [01KPAX3RPC8FBX5JBEG04R1MDD]
    And The user clicks on Load Content [01KPAX4BRA9701ZG5PDY66WRGG]
    And Verify element property [01KPAX4RBXVGV2WECH4EJ50GH3]
    And The user toggles the shadow toggle switch [01KPAXE9849BC00CD5EMZFDD51]
    And The user fills in the accent color details [01KPAXFH6QJJ63C1YM6E4NDHG2]

  Scenario Outline: GFG
    Given The user closes the modal [01KPAY5E22WTD0W0EB04WV5TN5]
    And The user hovers on the Courses menu [01KPAYA4X0GC157SCQHKKJ0BM4]
    And The user selects the Development option [01KPAYAWE5MTHGQ94323FN07DQ]
    And The user selects the Self-Paced learning option [01KPAYBA64KJQM5906YXM8JCGK]
    And The user selects the Cloud / DevOps option [01KPAYC8ZCKACXD2FJE6HZ2PYN]
    And The user selects the MongoDB x GeeksforGeeks option [01KPAYCBQQCSFAR2G4JR4BTNK3]
    And The user selects the Exam Preparation option [01KPAYCFFKMNXCDP7PMMXNHD23]
    And The user clicks on the notification button [01KPAYEWN0Y9RS4AGX45YKGFPJ]

  Scenario Outline: Samsung
    Given The user accepts all [01KPAZFKKEQWB0K8F2T04VAEYY]
    And The user selects the product [01KPAZGM5A3ZPHVVP3AKW21CP9]
    And Verify text "Avancerad 2-vägs högtalare" is found in the page [01KPAZJDHWSJXJFYGM0A5SHK0Q]
    And Verify element property [01KPAZNYK6M22W88PKMASJQXHA]
    And The user navigates to the wearables category [01KPAZP9P6P9ZHXMP3857KEH7N]
    And The user selects the product 2 [01KPAZZN2SDB7R04F6EBP2HKSC]
    And The user purchases the product [01KPAZZRYX9GT9N1XGV964557F]
    And The user confirms the product purchase [01KPB04G8DQEGGV7RGYRCVJAS0]
    And The user navigates to the TV & Ljud category [01KPB0DSYJJDBYRK4CG6M868HD]
    And The user selects the product 2 [01KPB0DZAJZ154A2FE6SRKH0H8]
    And The user purchases the product 2 [01KPB0KA34KV6K3PD4G7GMCYEX]

  Scenario Outline: New Test 7