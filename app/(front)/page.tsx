import Productitem from "../_components/Productitem";
import data from "../lib/models/Data";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-2xl my-5 text-center ">latest product</h2>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 py-10">
          {data.Products.map((product) => (
            <Productitem key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
