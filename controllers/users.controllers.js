import User from "../model/user";

export const login = async (req, res) => {
  try {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "The user does not exist",
      });
    }

    res.status(200).json({
      message: "Created user",
      uid: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      favorites: user.favorites,
      role: user.role,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Something went wrong",
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const { email } = req.body;

    let user = await Usuario.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "The user already exists",
      });
    }

    user = new User(req.body);
    await user.save();

    res.status(201).json({
      status: user.status,
      password: user.password,
      name: user.name,
      email: user.email,
      image: user.image,
      role: user.role,
      favorites: user.favorites,
      uid: user._id,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Something went wrong",
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error when trying to get the users",
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error when trying to get the user",
    });
  }
};

export const editUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      mensaje: "User edited successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error when trying to edit the user",
    });
  }
};

export const addFavorites = async (req, res) => {
  const { userID } = req.params;
  const { newFavorites } = req.body;
  try {
    const user = await User.findById(userID);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    const exist = user.favorites.includes(newFavorites);

    if (!exist) {
      user.favorites.push(newFavorites);
    } else {
      user.favorites = user.favorites.filter((fav) => fav !== newFavorites);
    }

    await user.save();

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error when trying to add the favorites",
    });
  }
};
