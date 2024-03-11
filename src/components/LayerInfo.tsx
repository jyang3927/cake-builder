import React from "react";
import { Layer } from "../models/Layer";
import SingleLayer from "./SingleLayer";

interface LayerInfoProps {
  layers: Layer[];
  setLayers: React.Dispatch<React.SetStateAction<Layer[]>>;
}

const colorOptions = ["#FFD700", "#FF5733", "#33FF57", "#3357FF", "#8B00FF"];

const LayerInfo: React.FunctionComponent<LayerInfoProps> = ({
  layers,
  setLayers,
}) => {
  const updateWidth = (index: number, width: number) => {
    if (index > 0 && width > layers[index - 1].width) {
      return;
    }
    for (let i = index + 1; i < layers.length; i++) {
      if (width < layers[i].width) {
        return;
      }
    }
    const updatedLayer = { ...layers[index], width };
    const newLayers = [...layers];
    newLayers[index] = updatedLayer;
    setLayers(newLayers);
  };
  const updateHeight = (index: number, height: number) => {
    const updatedLayer = { ...layers[index], height };
    const newLayers = [...layers];
    newLayers[index] = updatedLayer;
    setLayers(newLayers);
  };

  return (
    <div>
      {layers.map((layer, index) => (
        <div key={layer.id || index} className="layer-info">
          <SingleLayer layer={layer} />
          <div className="layer-edit">
            <label>
              Width ( {layer.width}%):
              <input
                type="range"
                min="1"
                max="100"
                value={layer.width}
                onChange={(e) =>
                  updateWidth(index, parseInt(e.target.value, 10))
                }
              />{" "}
            </label>
            <label>
              Height ({layer.height}px):
              <input
                type="range"
                min="20"
                max="200"
                value={layer.height}
                onChange={(e) =>
                  updateHeight(index, parseInt(e.target.value, 10))
                }
              />{" "}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LayerInfo;
