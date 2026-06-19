// dependencies
import type { FC } from "react";
// interface/@types
import type { ProductType } from "../../layouts/Document";
interface ItemType {
  info: ProductType;
}
// components
import Typography from "../typography";

// main
const FlexibleCard: FC<ItemType> = ({ info }) => {
  return (
    <div>
      <Typography className="mx-0 text-2xl font-bold text-[#2C3333] mb-2">
        {info.id}. {info.title}
      </Typography>
      <Typography className="mx-0 max-w-full text-md text-justify leading-relaxed mb-4">
        {info.description}
      </Typography>
      {info.lists && (
        <ul className="list-disc pl-6 text-[#395B64] space-y-2 mb-8">
          {info.lists.map((item, i) => (
            <li key={i}>
              {item.bold && (
                <strong className="text-[#2C3333]">{item.bold}:</strong>
              )}
              {item.para}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// exports
export default FlexibleCard;
