class ChangeMovieGenreDatatypeToArray < ActiveRecord::Migration[6.1]
  def change
    remove_column :movies, :genre
    add_column :movies, :genre, :string, array:true, default: []
  end
end
