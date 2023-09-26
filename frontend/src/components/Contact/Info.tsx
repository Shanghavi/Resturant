import React from 'react'


const Map: React.FC = () => {
  const Box: React.FC<{ title: string; descriptions: string[] }> = ({
    title,
    descriptions,
  }) => (
    <div className="flex flex-col items-center justify-center space-y-6  ">
      <div className="text-center text-3xl lg:text-3xl md:text-2xl font-bold font-rufina">
        {title}
      </div>
      <div className="text-center text-neutral-600 md:text-[18px] lg:text-xl text-xl font-normal font-lato">
        {descriptions.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative bg-white md:mt-10 lg:px-40 mt-10">
      <div className="py-10 px-4 md:px-10 bg-gray-200 rounded-lg">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Box
            title=" Location"
            descriptions={["A108 Adam Street,", "New York, NY 535022"]}
          />
          <Box
            title="Open Hours"
            descriptions={["Monday-Saturday:", "10:00 AM - 2300 PM"]}
          />
          <Box
            title="Contact"
            descriptions={["Email: info@example.com", "Phone: +1 123-456-7890"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Map;



