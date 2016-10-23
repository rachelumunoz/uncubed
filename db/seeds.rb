user1 = User.create!(username: "rach", email: "r@r.com", password: "password")
user2 = User.create!(username: "ash", email: "a@a.com", password: "password")
user3 = User.create!(username: "geo", email: "g@g.com", password: "password")

#create galleries
15.times do Gallery.create!(
  name: Faker::Company.name,
  address: Faker::Address.street_address,
  image: Faker::Placeholdit.image("300x300", 'jpg'),
  user_id: rand(1..3)
  )
end

Gallery.first.liked_by user1
Gallery.first.liked_by user2
Gallery.first.liked_by user3
Gallery.first.save


100.times do Comment.create!(
  content: Faker::Hipster.paragraph,
  commentable_id: rand(1..15),
  commentable_type: "Gallery",
  user_id: rand(1..3)
  )
end

75.times do Exhibition.create!(
  title: Faker::Book.title,
  artist: Faker::Book.author,
  date_begin: Faker::Date.between(35.days.ago, Date.today),
  date_end: Faker::Date.forward(105),
  gallery_id: rand(1..15),
  user_id: rand(1..3)
  )
end

# Exhibition.create!(title: "Jessica Eaton Solo Show", artist: "Jessica Eaton", date_begin: Date.new(2016, 9, 24), date_end: Date.new(2016, 11, 12), gallery_id: 1)

# gallery_1 = Gallery.create!(name: "M + B", address: "612 North Almont Drive", image: File.new("./public/m_b.jpg"))


# gallery_1_review_1 = Comment.create!(content: "I look forward to their shows. Thoughtfully curated, and they have a great line up of artists.", commentable_id: 1, commentable_type: "Gallery", user_id: 1)

# gallery_2 = Gallery.create!(name: "Various Small Fires", address: "812 Highland Ave", image: File.new("./public/vsf.jpg"))
# gallery_2.liked_by user1
# gallery_2.save

# gallery_3 = Gallery.create!(name: "Susanne Vielmetter", address: "6006 Washington Blvd", image: File.new("./public/sus_viel.jpg"))


# gallery_3.liked_by user1
# gallery_3.liked_by user2
# gallery_3.save


# # gallery_1 
# exhibition1 = Exhibition.create!(title: "Jessica Eaton Solo Show", artist: "Jessica Eaton", date_begin: Date.new(2016, 9, 24), date_end: Date.new(2016, 11, 12), gallery_id: 1)


# # gallery_2 
# exhibition2 = Exhibition.create!(title: "Relics of the Epoch", artist: "Jeff Ziln", date_begin: Date.new(2016, 9, 17), date_end: Date.new(2016, 10, 22), gallery_id: 2)

