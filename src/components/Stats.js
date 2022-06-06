import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import hall from "../assets/hall.jpg";
export default function Stats() {
  return (
    <div className="relative  bg-gray-200">
      <div className="grid md:grid-cols-2 sm:grid-cols-4">
        <div className="grid  grid-cols-2 gap-10 lg:p-10 p-5">
          <img
            className="w-full sm:grid-cols-2 h-44 rounded-2xl shadow-2xl object-cover"
            src={p1}
            alt="red"
          />
          <img
            className="w-full h-44 mt-10 rounded-2xl shadow-2xl object-cover"
            src={hall}
            alt="hall"
          />
          <img
            className="w-full sm:w-full -m-4 h-44 rounded-2xl shadow-2xl  object-cover"
            src={p2}
            alt="green"
          />
          <img
            className="w-full h-44 mx-4 rounded-3xl shadow-2xl  object-cover"
            src={p1}
            alt="flower"
          />
        </div>
        <div className="lg:p-10 sm:grid-cols-1 md:p-5 p-5">
          <h2 className="mt-20 text-3xl font-extrabold text-purple-500 sm:text-4xl">
            Make your Marriage Memorable
            <br></br>
          </h2>
          <p className="mt-6 grid text-lg text-gray-500">
            We are the first company to reserve your marriage venue, Banquet
            halls and Marriage lawns in Lahore, Islamabad and all over
            Pakistan.We provide you an easy way to Book your Wedding place on
            some clicks.Hallogs Makes Your Choice Easy and Optimum.
          </p>
        </div>
      </div>
    </div>
  );
}
