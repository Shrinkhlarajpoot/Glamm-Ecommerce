import { Footer, MainCard ,Loader} from "../../components";
import {useWishlist } from "../../context";
import "./Wishlist.css";
const Wishlist = () => {
  const { wishlist, wishlistLoading } = useWishlist();

  return (
    <>
      {!wishlistLoading ? (
        <div>
          <div className="wishlist">
            {wishlist.wishlistProducts.length === 0 && (
              <h1 class="heading_emptycart">Oops ..Wishlist is Empty</h1>
            )}

            {wishlist.wishlistProducts.map((products) => (
              <MainCard products={products} key={products._id} />
            ))}
          </div>
          </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
export { Wishlist };
