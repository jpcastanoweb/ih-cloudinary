const Movie = require("./../models/Movie.model")

exports.createMovie = async (req, res) => {
  res.render("movie-views/movie-create")
}

exports.processNewMovie = async (req, res) => {
  const { title, description } = req.body

  Movie.create({
    title,
    description,
    imageUrl: req.file.path,
  })
    .then((movieCreated) => {
      res.redirect("/movies")
    })
    .catch((e) => console.log("There was an error creating movie", e))
}

exports.listMovies = async (req, res) => {
  Movie.find().then((foundMovies) => {
    res.render("movie-views/movies-list", {
      movies: foundMovies,
    })
  })
}

exports.editMovie = async (req, res) => {
  const { id } = req.params

  Movie.findById(id)
    .then((movieFound) => {
      res.render("movie-views/movie-edit", movieFound)
    })
    .catch((e) => console.log("Error finding movie to edit: ", e))
}

exports.updateMovie = async (req, res) => {
  const { id } = req.params
  const { title, description, existingImage } = req.body

  console.log(existingImage)

  let imageUrl

  if (req.file) {
    imageUrl = req.file.path
  } else {
    imageUrl = existingImage
  }

  Movie.findByIdAndUpdate(id, { title, description, imageUrl }, { new: true })
    .then(() => {
      res.redirect("/movies")
    })
    .catch((e) => console.log("Error editing movie: ", e))
}
