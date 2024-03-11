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
  const updateLayer = (index: number, updatedLayer: Layer) => {
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
              Width (%):
              <input
                type="range"
                min="1"
                max="100"
                value={layer.width}
                onChange={(e) =>
                  updateLayer(index, {
                    ...layer,
                    width: parseInt(e.target.value, 10),
                  })
                }
              />
            </label>
            <label>
              Height (px):
              <input
                type="range"
                min="20"
                max="200"
                value={layer.height}
                onChange={(e) =>
                  updateLayer(index, {
                    ...layer,
                    height: parseInt(e.target.value, 10),
                  })
                }
              />
            </label>
            <label>
              Color:
              <select
                value={layer.color}
                onChange={(e) =>
                  updateLayer(index, { ...layer, color: e.target.value })
                }
              >
                {colorOptions.map((color, idx) => (
                  <option key={idx} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LayerInfo;
