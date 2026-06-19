// dependencies
import type { FC } from "react";
// interface/@types
export interface listType {
  bold?: string;
  para: string;
}
export interface ProductType {
  id: number;
  title: string;
  description: string;
  lists?: listType[];
}
interface dataType {
  data: {
    headline: string;
    icon: React.ElementType<{ className?: string }>;
    updatedDate: string;
    fieldLists: ProductType[];
  };
}
// components
import Typography from "../components/typography";
import FlexibleCard from "../components/ui/flexibleTextBox";

// main
const DocumentLayout: FC<dataType> = ({ data }) => {
  return (
    <div className="bg-[#E7F6F2] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#395B64] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#395B64]/20">
              <data.icon className="w-8 h-8" />
            </div>
          </div>
          <Typography variant="head">{data.headline}</Typography>
          <Typography className="text-lg font-semibold">
            Effective Date: {data.updatedDate}
          </Typography>
        </div>

        {/* field lists */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[#A5C9CA]/30 prose prose-stone max-w-none">
          {data.fieldLists.map((item: ProductType, index: number) => (
            <FlexibleCard key={index} info={item} />
          ))}

          <Typography className="mx-0 text-2xl font-bold text-[#2C3333] mb-4">
            7. Contact Us
          </Typography>
          <Typography className="text-md mx-0 leading-relaxed">
            If you have questions or comments about this Privacy Policy, please
            contact us at:
            <br />
            <br />
            <strong>Bakert</strong>
            <br />
            123 Sugarplum Lane
            <br />
            Sweet City, SC 12345
            <br />
            Email: privacy@bakert.com
            <br />
            Phone: +1 (555) 123-4567
          </Typography>
        </div>
      </div>
    </div>
  );
};

// exports
export default DocumentLayout;
