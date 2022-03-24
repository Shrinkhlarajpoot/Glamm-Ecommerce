import { Footer, MainCard } from "../../components";
import { Loader } from "../../components/Loader/Loader";
import { useWishlist } from "../../context/wishlistContext";
import "./WishlistScreen.css";
const WishlistScreen = () => {
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
          <Footer />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
export { WishlistScreen };
