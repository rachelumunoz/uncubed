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

