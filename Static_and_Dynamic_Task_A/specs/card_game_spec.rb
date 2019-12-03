require("minitest/autorun")
require('minitest/rg')
require_relative("../card.rb")
require_relative("../card_game.rb")

class GuestTest < MiniTest::Test

  def setup
    @card1 = Card.new('hearts', 1)
    @card2 = Card.new('clubs', 10)
  end

  def test_check_for_ace_true()
    assert_equal(true, CardGame.checkforAce(@card1) )
  end

  def test_check_for_ace_false()
    assert_equal(false, CardGame.checkforAce(@card2))
  end

  def test_returns_highest_card()
    assert_equal(@card2, CardGame.highest_card(@card1, @card2))
  end

  def test_returns_cards_total()
    assert_equal("You have a total of 11", CardGame.cards_total([@card1, @card2]))
  end

end
