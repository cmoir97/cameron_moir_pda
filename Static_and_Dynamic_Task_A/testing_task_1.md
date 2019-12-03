### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame


  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

  #checking that the card.value is equal to 1 would be done by
  #saying card.value == 1, not by using a single equals, this sets a value instead
  #of checking it. Name of function should be snake case (check_for_ace) not
  # camel case. Method should be a self. method as there is no initialise in
  # the class.

  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card
  else
    return card2
  end
end
end

# This should also be a self method as there is no initialise for the class.
#def has been misspelt as dif so this function would not run as it hasn't been
#defined. There is also a missing comma between the two arguments (card1 & card2)
#being passed into the function so these would not be recognised either. The function
#is being asked to return card if card1.value > card2.value. card does not exist,
#only card1 and card2 are being passed in as arguments. There are one too many ends
#in this function, only two are needed. One for the function itself and one for
#the if statement. The indentation is incorrect.


def self.cards_total(cards)
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end

#The variable total has not been given a value when it is created in the first
#line of the function. A space has not been left after of at the end of the
#string so the total would follow it without a space in between, total should
#also have .to_s on the end to convert it to a string and the return should
#be outside the for loop.

# There is no end for the class which should go after the last function.
```
