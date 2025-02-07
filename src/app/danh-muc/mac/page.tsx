import Image from 'next/image';

export default function ProductList() {
  return (
    <main id="main" className="">
      <div className="row category-page-row">
        <div className="col large-12">
          <div className="shop-container">
            <div className="woocommerce-notices-wrapper"></div>
            <div className="products row row-small large-columns-5 medium-columns-3 small-columns-2">
              {/* Product 1 */}
              <div className="product-small col has-hover product type-product post-59380 status-publish first instock product_cat-mac product_cat-macbook-pro has-post-thumbnail shipping-taxable product-type-variable">
                <div className="col-inner">
                  <div className="product-small box">
                    <div className="box-image">
                      <div className="image-none">
                        <a href="http://localhost:3000/danh-muc/macbook-m3-max-16-inch/">
                          <Image
                            width={500}
                            height={438}
                            src="https://nhistore.com.vn/wp-content/uploads/2023/11/mbp16-spaceblack-1-nhistore-500x438.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="image-tools is-small top right show-on-hover"></div>
                      <div className="image-tools is-small hide-for-small bottom left show-on-hover"></div>
                      <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                    </div>
                    <div className="box-text box-text-products text-center grid-style-2">
                      <div className="title-wrapper">
                        <p className="name product-title woocommerce-loop-product__title">
                          <a href="http://localhost:3000/danh-muc/macbook-m3-max-16-inch/" className="woocommerce-LoopProduct-link woocommerce-loop-product__link">Macbook M3 MAX 16 inch</a>
                        </p>
                        <span className="isures-imformation--var"><span className="imfo--details"></span><i className="fas fa-info-circle"></i></span>
                      </div>
                      <div className="price-wrapper">
                        <div className="star-rating"><span style={{ width: '0%' }}>Được xếp hạng <strong className="rating">0</strong> 5 sao</span></div>
                        <span className="price"><span className="amount">Liên hệ</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Product 2 */}
              <div className="product-small col has-hover product type-product post-59363 status-publish instock product_cat-mac product_cat-macbook-pro has-post-thumbnail shipping-taxable product-type-variable">
                <div className="col-inner">
                  <div className="product-small box">
                    <div className="box-image">
                      <div className="image-none">
                        <a href="http://localhost:3000/danh-muc/macbook-m3-pro-16-inch/">
                          <Image
                            width={500}
                            height={438}
                            src="https://nhistore.com.vn/wp-content/uploads/2023/11/mbp16-spaceblack-1-nhistore-500x438.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="image-tools is-small top right show-on-hover"></div>
                      <div className="image-tools is-small hide-for-small bottom left show-on-hover"></div>
                      <div className="image-tools grid-tools text-center hide-for-small bottom hover-slide-in show-on-hover"></div>
                    </div>
                    <div className="box-text box-text-products text-center grid-style-2">
                      <div className="title-wrapper">
                        <p className="name product-title woocommerce-loop-product__title">
                          <a href="http://localhost:3000/danh-muc/macbook-m3-pro-16-inch/" className="woocommerce-LoopProduct-link woocommerce-loop-product__link">Macbook M3 PRO 16 inch</a>
                        </p>
                        <span className="isures-imformation--var"><span className="imfo--details"></span><i className="fas fa-info-circle"></i></span>
                      </div>
                      <div className="price-wrapper">
                        <div className="star-rating"><span style={{ width: '0%' }}>Được xếp hạng <strong className="rating">0</strong> 5 sao</span></div>
                        <span className="price"><span className="amount">Liên hệ</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}