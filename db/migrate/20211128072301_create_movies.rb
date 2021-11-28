class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :show_type
      t.string :network
      t.string :genre
      t.string :us_rating
      t.integer :year

      t.timestamps
    end
  end
end
