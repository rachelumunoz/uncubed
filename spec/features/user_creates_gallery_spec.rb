require 'rails_helper'

RSpec.describe "Create Gallery" do 
  scenario "Successfully" do 
    visit root_path
    click_on "Add Gallery"
    
    fill_in "Name", with: "The Gallery"
    fill_in "Address", with: "123 Gallery Street"
    click_on "Create Gallery"

    expect(page).to have_content "The Gallery"
  end

  scenario "Unsuccessfully" do
    visit root_path
    click_on "Add Gallery"

    fill_in "Name", with: "A Gallery"
    fill_in "Address", with: ""

    #need better test
    expect(current_path).to eq new_gallery_path
  end
end