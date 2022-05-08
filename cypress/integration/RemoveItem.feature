
Feature:  Remove a product from the cart


     Scenario:  Verify that the user should be able to remove an item by clicking delete icon
          Given the user is on the home page
          And the user accepts the cookies
          When the user navigates to the page
               | tab       | module         |
               | For Babys | Clutching toys |
          And the user add a product "306203" to the cart
          And the user clicks chart icon at the top of the right corner
          When the user click remove item icon
          Then verify that item has been removed and the system displayed "Product has been removed from your cart."


     Scenario: Verify that the user should be able to remove an item by selecting 0 quantity
          Given the user is on the home page
          And the user accepts the cookies
          When the user navigates to the page
               | tab       | module         |
               | For Babys | Clutching toys |
          And the user add a product "306203" to the cart
          And the user clicks chart icon at the top of the right corner
          When the user change quantity of product with "0"
          Then verify that item has been removed and the system displayed "Product has been removed from your cart."


     @focus
     Scenario Outline: Verify that the user should be able to add a product "<productNumber>" to the cart
          Given the user is on the home page
          And the user accepts the cookies
          When the user navigates to the page
               | tab       | module         |
               | For Babys | Clutching toys |
          And the user add a product "<productNumber>" to the cart
          And the user clicks chart icon at the top of the right corner
          Then verify that the user can see the added product "<productNumber>" in the cart
          Examples: productNumber
               | productNumber |
               | 306660        |
               | 306690        |
               | 300426        |



