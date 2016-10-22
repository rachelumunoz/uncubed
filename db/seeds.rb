# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create!(username: "rach", email: "r@r.com", password: "password")


gallery_1 = Gallery.create!(name: "M + B", address: "612 North Almont Drive", image: File.new("./public/m_b.jpg"))

gallery_2 = Gallery.create!(name: "Various Small Fires", address: "812 Highland Ave", image: File.new("./public/vsf.jpg"))

# gallery_1 
exhibition1 = Exhibition.create!(title: "Jessica Eaton Solo Show", artist: "Jessica Eaton", date_begin: Date.new(2016, 9, 24), date_end: Date.new(2016, 11, 12), gallery_id: 1)



# gallery_2 
exhibition2 = Exhibition.create!(title: "Relics of the Epoch", artist: "Jeff Ziln", date_begin: Date.new(2016, 9, 17), date_end: Date.new(2016, 10, 22), gallery_id: 2)

