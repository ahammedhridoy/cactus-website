import { IoCartOutline } from "react-icons/io5";
import { Card, CardHeader, CardTitle } from "../ui/card";
import "./Shop.scss";

const Shop = () => {
  return (
    <div
      className="shop min-h-[100vh] mdl:mt-20 xs:mt-[100px] lgl:mt-[200px]"
      id="shop"
    >
      <div className="container">
        <h1 className="text-5xl text-center text-white uppercase">
          The Best Plants
        </h1>
        <div className="grid grid-cols-1 gap-20 mt-24 lg:grid-cols-4 mdl:grid-cols-2">
          <Card className="min-h-[250px] w-full cac-card">
            <CardHeader className="relative flex items-center justify-center">
              <img
                src="../../../public/assets/shop-cactus-1.png"
                alt=""
                className="absolute top-[-60px] w-[150px] cac-img"
              />
              <CardTitle className="text-2xl text-white title">
                Gymnocalycium Cactus
              </CardTitle>
            </CardHeader>
            <div className="flex justify-between px-5">
              <div className="font-bold text-white price">$30</div>
              <div className="cart">
                <IoCartOutline className="font-bold text-white cursor-pointer size-5" />
              </div>
            </div>
          </Card>

          <Card className="min-h-[250px] w-full cac-card">
            <CardHeader className="relative flex items-center justify-center">
              <img
                src="../../../public/assets/shop-cactus-2.png"
                alt=""
                className="absolute top-[-60px] w-[150px] cac-img"
              />
              <CardTitle className="text-2xl text-white title">
                Ariocarpus
              </CardTitle>
            </CardHeader>
            <div className="flex justify-between px-5">
              <div className="font-bold text-white price">$30</div>
              <div className="cart">
                <IoCartOutline className="font-bold text-white cursor-pointer size-5" />
              </div>
            </div>
          </Card>

          <Card className="min-h-[250px] w-full cac-card">
            <CardHeader className="relative flex items-center justify-center">
              <img
                src="../../../public/assets/shop-cactus-3.png"
                alt=""
                className="absolute top-[-60px] w-[150px] cac-img"
              />
              <CardTitle className="text-2xl text-white title">
                Xena the xerophyte
              </CardTitle>
            </CardHeader>
            <div className="flex justify-between px-5">
              <div className="font-bold text-white price">$30</div>
              <div className="cart">
                <IoCartOutline className="font-bold text-white cursor-pointer size-5" />
              </div>
            </div>
          </Card>

          <Card className="min-h-[250px] w-full cac-card">
            <CardHeader className="relative flex items-center justify-center">
              <img
                src="../../../public/assets/shop-cactus-4.png"
                alt=""
                className="absolute top-[-60px] w-[150px] cac-img"
              />
              <CardTitle className="text-2xl text-white title">
                Denizen of deserts
              </CardTitle>
            </CardHeader>
            <div className="flex justify-between px-5">
              <div className="font-bold text-white price">$30</div>
              <div className="cart">
                <IoCartOutline className="font-bold text-white cursor-pointer size-5" />
              </div>
            </div>
          </Card>

          <Card className="min-h-[250px] w-full cac-card">
            <CardHeader className="relative flex items-center justify-center">
              <img
                src="../../../public/assets/shop-cactus-5.png"
                alt=""
                className="absolute top-[-60px] w-[150px] cac-img"
              />
              <CardTitle className="text-2xl text-white title">Carl</CardTitle>
            </CardHeader>
            <div className="flex justify-between px-5">
              <div className="font-bold text-white price">$30</div>
              <div className="cart">
                <IoCartOutline className="font-bold text-white cursor-pointer size-5" />
              </div>
            </div>
          </Card>

          <Card className="min-h-[250px] w-full cac-card">
            <CardHeader className="relative flex items-center justify-center">
              <img
                src="../../../public/assets/shop-cactus-1.png"
                alt=""
                className="absolute top-[-60px] w-[150px] cac-img"
              />
              <CardTitle className="text-2xl text-white title">
                Acanthocalycium
              </CardTitle>
            </CardHeader>
            <div className="flex justify-between px-5">
              <div className="font-bold text-white price">$30</div>
              <div className="cart">
                <IoCartOutline className="font-bold text-white cursor-pointer size-5" />
              </div>
            </div>
          </Card>
          <Card className="min-h-[250px] w-full cac-card">
            <CardHeader className="relative flex items-center justify-center">
              <img
                src="../../../public/assets/shop-cactus-2.png"
                alt=""
                className="absolute top-[-60px] w-[150px] cac-img"
              />
              <CardTitle className="text-2xl text-white title">
                Melocactus
              </CardTitle>
            </CardHeader>
            <div className="flex justify-between px-5">
              <div className="font-bold text-white price">$30</div>
              <div className="cart">
                <IoCartOutline className="font-bold text-white cursor-pointer size-5" />
              </div>
            </div>
          </Card>
          <Card className="min-h-[250px] w-full cac-card">
            <CardHeader className="relative flex items-center justify-center">
              <img
                src="../../../public/assets/shop-cactus-3.png"
                alt=""
                className="absolute top-[-60px] w-[150px] cac-img"
              />
              <CardTitle className="text-2xl text-white title">Kitty</CardTitle>
            </CardHeader>
            <div className="flex justify-between px-5">
              <div className="font-bold text-white price">$30</div>
              <div className="cart">
                <IoCartOutline className="font-bold text-white cursor-pointer size-5" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Shop;
