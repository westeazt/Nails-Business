// This is a TypeScript feature called an 'interface'.
// It's like a contract that defines the 'shape' of the data our component expects.
// It says, "Anyone who uses ServiceCard MUST provide a 'service' object
// that contains a name, a description, and a price."
interface ServiceCardProps {
  service: {
    name: string;
    description: string;
    price: string;
  };
}

// Our component receives the 'props' object. We use destructuring `{ service }`
// to directly access the service data we passed in.
export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-gray-50 flex flex-col">
      <h3 className="text-xl font-semibold mb-2 text-pink-500">{service.name}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
      <p className="text-lg font-bold mt-auto">{service.price}</p>
    </div>
  );
}