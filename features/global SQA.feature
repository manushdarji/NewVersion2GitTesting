Feature: global SQA

  Scenario Outline: New Test 1
    Given The user clicks on the Consent and Tabs options [01KPDGZNA5CD2J42Z1938GQMFP]
    And Verify text "Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate." is found in the page [01KPDH130AC0RDKNKTCGH9PE96]
    And The user clicks on the text option [01KPDH1Z3N4HMZDPFM0AW10B06]
    And Verify text "Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In suscipit faucibus urna." is found in the page [01KPDH2A8EHNHXZ4QRWSA23SS5]
    And The user clicks on the Re-Size Accordion option [01KPDH2JR5V711HHCJA4DSSBW5]
    And The user clicks on the text option 2 [01KPDH2T5VEPDK5W08HP4FBAGA]
    And Verify text "Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In suscipit faucibus urna." is found in the page [01KPDH3AGEXM76KDQ4QRQJSJPW]
    And The user clicks on the Toggle Icons option [01KPDH3K6EGW2RRNX36KC3GAW3]
    And The user clicks on the Toggle Icons option 2 [01KPDH3WB0130SX6NX06K2GPWA]

  Scenario Outline: New Test 2
    Given The user clicks on Consent [01KPDMYKGGYJXMYG54XJSY2SH5]
    And The user clicks on SelectElements [01KPDMZ7GC9GE9Z565CH427D4R]
    And The user selects multiple list items [01KPDN9SDPRFZ750PRDJSA7AE7]
    And The user clicks on Grid Selection [01KPDNA0FF7FKS4Z2Q67NEB8NF]
    And The user selects multiple list items 2 [01KPDNA2D7AMPEKFXGY7N8BDBS]
    And The user clicks on Serialize [01KPDNA9HKNJWX90SF5K5Y948E]
    And The user selects multiple list items 2 [01KPDNAAV0AECGHJCW69ZQ8H53]
    And Verify text "#6" is found in the page [01KPDNAJSNG0TH5QD3QGGRTMAV]

  Scenario Outline: New Test 3
    Given The user clicks on the toolbar [01KPMPXX78FGT8RYME8HYKA9PZ]
    And The user updates the text content [01KPMPZ15JJF73TH092ZH2J5KD]
      """
      {
        "entered_text": "The Rime of the Ancient Mariner (text of 1834)\nBY SAMUEL TAYLOR COLERIDGE\nArgument\n\nHow a Ship having passed the Line was driven by storms to the cold Country towards the South Pole;\nand how from thence she made her course to the tropical Latitude of the Great Pacific Ocean; and\nof the strange things that befell; and in what manner the Ancyent Marinere came back to his own\nCountry.\n\nPART I\nIt is an ancient Mariner,\nAnd he stoppeth one of three.\n'By thy long grey beard and glittering eye,\nNow wherefore stopp'st thou me?\n\nThe Bridegroom's doors are opened wide,\nAnd I am next of kin;\nThe guests are met, the feast is set:\nMay'st hear the merry din.'\n\nHe holds him with his skinny hand,\n'There was a ship,' quoth he.\n'Hold off! unhand me, grey-beard loon!'\nEftsoons his hand dropt he.\n\nHe holds him with his glittering eye—\nThe Wedding-Guest stood still,\nAnd listens like a three years' child:\nThe Mariner hath his will.\n\nThe Wedding-Guest sat on a stone:\nHe cannot choose but hear;\nAnd thus spake on that ancient man,\nThe bright-eyed Mariner.\n\n'The ship was cheered, the harbour cleared,\nMerrily did we drop\nBelow the kirk, below the hill,\nBelow the lighthouse top.\nthis is manush\n\nThe Sun came up upon the left,\nOut of the sea came he!\nAnd he shone bright, and on the right\nWent down into the sea.\n\nHigher and higher every day,\nTill over the mast at noon—'\nThe Wedding-Guest here beat his breast,\nFor he heard the loud bassoon.\n\nThe bride hath paced into the hall,\nRed as a rose is she;\nNodding their heads before her goes\nThe merry minstrelsy.\n\nThe Wedding-Guest he beat his breast,\nYet he cannot choose but hear;\nAnd thus spake on that ancient man,\nThe bright-eyed Mariner.\n\nAnd now the STORM-BLAST came, and he\nWas tyrannous and strong:\nHe struck with his o'ertaking wings,\nAnd chased us south along.\n\nWith sloping masts and dipping prow,\nAs who pursued with yell and blow\nStill treads the shadow of his foe,\nAnd forward bends his head,\nThe ship drove fast, loud roared the blast,\nAnd southward aye we fled.\n\nAnd now there came both mist and snow,\nAnd it grew wondrous cold:\nAnd ice, mast-high, came floating by,\nAs green as emerald.\n\nAnd through the drifts the snowy clifts\nDid send a dismal sheen:\nNor shapes of men nor beasts we ken—\nThe ice was all between.\n\nThe ice was here, the ice was there,\nThe ice was all around:\nIt cracked and growled, and roared and howled,\nLike noises in a swound!\n\nAt length did cross an Albatross,\nThorough the fog it came;\nAs if it had been a Christian soul,\nWe hailed it in God's name.\n\nIt ate the food it ne'er had eat,\nAnd round and round it flew.\nThe ice did split with a thunder-fit;\nThe helmsman steered us through!\n\nAnd a good south wind sprung up behind;\nThe Albatross did follow,\nAnd every day, for food or play,\nCame to the mariner's hollo!\n\nIn mist or cloud, on mast or shroud,\nIt perched for vespers nine;\nWhiles all the night, through fog-smoke white,\nGlimmered the white Moon-shine.'\n\n'God save thee, ancient Mariner!\nFrom the fiends, that plague thee thus!—\nWhy look'st thou so?'—With my cross-bow\nI shot the ALBATROSS.\n"
      }
      """

  Examples:
    | entered_text                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
    | The Rime of the Ancient Mariner (text of 1834)
BY SAMUEL TAYLOR COLERIDGE
Argument

How a Ship having passed the Line was driven by storms to the cold Country towards the South Pole;
and how from thence she made her course to the tropical Latitude of the Great Pacific Ocean; and
of the strange things that befell; and in what manner the Ancyent Marinere came back to his own
Country.

PART I
It is an ancient Mariner,
And he stoppeth one of three.
'By thy long grey beard and glittering eye,
Now wherefore stopp'st thou me?

The Bridegroom's doors are opened wide,
And I am next of kin;
The guests are met, the feast is set:
May'st hear the merry din.'

He holds him with his skinny hand,
'There was a ship,' quoth he.
'Hold off! unhand me, grey-beard loon!'
Eftsoons his hand dropt he.

He holds him with his glittering eye—
The Wedding-Guest stood still,
And listens like a three years' child:
The Mariner hath his will.

The Wedding-Guest sat on a stone:
He cannot choose but hear;
And thus spake on that ancient man,
The bright-eyed Mariner.

'The ship was cheered, the harbour cleared,
Merrily did we drop
Below the kirk, below the hill,
Below the lighthouse top.
this is manush

The Sun came up upon the left,
Out of the sea came he!
And he shone bright, and on the right
Went down into the sea.

Higher and higher every day,
Till over the mast at noon—'
The Wedding-Guest here beat his breast,
For he heard the loud bassoon.

The bride hath paced into the hall,
Red as a rose is she;
Nodding their heads before her goes
The merry minstrelsy.

The Wedding-Guest he beat his breast,
Yet he cannot choose but hear;
And thus spake on that ancient man,
The bright-eyed Mariner.

And now the STORM-BLAST came, and he
Was tyrannous and strong:
He struck with his o'ertaking wings,
And chased us south along.

With sloping masts and dipping prow,
As who pursued with yell and blow
Still treads the shadow of his foe,
And forward bends his head,
The ship drove fast, loud roared the blast,
And southward aye we fled.

And now there came both mist and snow,
And it grew wondrous cold:
And ice, mast-high, came floating by,
As green as emerald.

And through the drifts the snowy clifts
Did send a dismal sheen:
Nor shapes of men nor beasts we ken—
The ice was all between.

The ice was here, the ice was there,
The ice was all around:
It cracked and growled, and roared and howled,
Like noises in a swound!

At length did cross an Albatross,
Thorough the fog it came;
As if it had been a Christian soul,
We hailed it in God's name.

It ate the food it ne'er had eat,
And round and round it flew.
The ice did split with a thunder-fit;
The helmsman steered us through!

And a good south wind sprung up behind;
The Albatross did follow,
And every day, for food or play,
Came to the mariner's hollo!

In mist or cloud, on mast or shroud,
It perched for vespers nine;
Whiles all the night, through fog-smoke white,
Glimmered the white Moon-shine.'

'God save thee, ancient Mariner!
From the fiends, that plague thee thus!—
Why look'st thou so?'—With my cross-bow
I shot the ALBATROSS.
 |

  Scenario Outline: New Test 4
    Given The user clicks the Consent option [01KPMS2WYR36EBEGRWAGQBBHW7]
    And The user clicks the Spinner option [01KPMS39FBXK7FYV9E0VFVWXR8]
    And The user selects the donation currency details [01KPMS4B5M0EYNCY55CAW3WVQT]
      """
      {
        "currency_to_donate_locale": "ja-JP"
      }
      """
    And The user sets the value option [01KPMS4RBKT6XY238DZJA6TDVM]
    And The user interacts with the spinner controls [01KPMS5T3WRJ78Z1TT0AQ66XSC]

  Examples:
    | currency_to_donate_locale |
    | ja-JP                     |

  Scenario Outline: Spinner
    Given The user clicks on the consent progress bar [01KPMTDGHPJ8PEVJT779GJ75Y4]
    And The user completes and closes the file download dialog [01KPMTMDB95C54VVPTQQM0JEZF]
    And Verify element property [01KPMTN0X6GZ410JTRHCEDY6T3]
    And The user clicks on the progress bar options [01KPMTNWWEDA1Z33YNYCW0Y53F]
    And Verify element property [01KPMTP8HH3WSQENZ87N8SFX63]

  Scenario Outline: Auto Complete
    Given The user clicks on Consent [01KPMVB26T4C0247YCJG5SSZDV]
    And The user clicks on AutoComplete [01KPMVBHVEGXM3ACWXYB8QE7YS]
    And The user searches with search text [01KPMVEMKQFF3WV0PQF7YGFRS3]
      """
      {
        "search_text": "manush darji"
      }
      """
    And The user selects the programming language [01KPMVF7KS0HHJFRBDPXH62WWY]
      """
      {
        "programming_language": "Erlang"
      }
      """

  Examples:
    | search_text  | programming_language |
    | manush darji | Erlang               |

  Scenario Outline: alert box
    Given The user clicks on Consent [01KPMVZEB1MM75NSA3MPQJWQM8]
    And The user clicks on AlertBox [01KPMW0BH74YFWJ7QA14NKQ8VR]
    And The user clicks on Confirmation Box [01KPMW0XR9SKABEMCN9GTNVVN7]
    And The user clicks on Prompt Box [01KPMW16A13DZCBMKJQJ9ZAQD1]
    And The user clicks on Try it [01KPMW19TM35Y5747EYAXE840Z]

  Scenario Outline: angular js site in globalSQA.
    Given The user clicks on Consent [01KPMWCJ6WWEMSJYWQFM77B1MN]
    And The user navigates to the AngularJS site [01KPMWD28H067SFGB3Z2VR6278]
    And The user fills in the contact form details and submits it [01KPMWK5WF52SR10V70HQVJHGP]
      """
      {
        "name": "Manush Darji",
        "email": "manushdarji@gmail.com",
        "subject": "kaise ho",
        "message": "this is manush darji "
      }
      """

  Examples:
    | name         | email                 | subject  | message               |
    | Manush Darji | manushdarji@gmail.com | kaise ho | this is manush darji  |