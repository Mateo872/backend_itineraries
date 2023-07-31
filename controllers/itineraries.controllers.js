import Itinerary from "../model/itineraries";

export const getItineraries = async (req, res) => {
  try {
    const itinerary = await Itinerary.find();
    res.status(200).json(itinerary);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "An error occurred while searching for itineraries.",
    });
  }
};

export const getItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);
    res.status(200).json(itinerary);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "An error occurred while searching for the itinerary.",
    });
  }
};

export const createItinerary = async (req, res) => {
  try {
    const newItinerary = new Itinerary(req.body);
    await newItinerary.save();
    res.status(201).json({
      mensaje: `The itinerary was created successfully.`,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "An error occurred while creating the itinerary.",
    });
  }
};

export const deleteItinerary = async (req, res) => {
  try {
    await Itinerary.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "The itinerary was successfully deleted.",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "An error occurred while deleting the itinerary.",
    });
  }
};

export const updateItinerary = async (req, res) => {
  try {
    await Itinerary.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "The itinerary was successfully updated.",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "An error occurred while editing the itinerary.",
    });
  }
};
