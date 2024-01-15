const Svg = () => {
  return (
    <>
    <div style={{
      position: 'relative',
      width: '100%',
      height: '500px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    className='flex flex-col gap-4 '
    >

      <div className='my-auto text-xl font-bold'>
        <p className='px-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab cum nisi deserunt laborum maiores accusantium quam soluta, iste, libero quod similique dignissimos, ratione exercitationem! Quod quam exercitationem consequatur animi.</p>
        <p className='px-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ab cum nisi deserunt laborum maiores accusantium quam soluta, iste, libero quod similique dignissimos, ratione exercitationem! Quod quam exercitationem consequatur animi.</p>
      </div>

      <div style={{
        // backgroundColor: "lime",
        backgroundColor: "lime",
        position: 'absolute',
        transform: "skewY(6deg)", // Use skewY for a skewed effect
        zIndex: '-1',
        width: '100%',
        height: '500px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      ></div>

    </div>
      <div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor sint quae iste. Eos quos blanditiis eius amet consequuntur delectus a praesentium! Earum possimus quia sequi. Repudiandae dolore, accusamus quaerat ullam hic cum?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor sint quae iste. Eos quos blanditiis eius amet consequuntur delectus a praesentium! Earum possimus quia sequi. Repudiandae dolore, accusamus quaerat ullam hic cum?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor sint quae iste. Eos quos blanditiis eius amet consequuntur delectus a praesentium! Earum possimus quia sequi. Repudiandae dolore, accusamus quaerat ullam hic cum?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor sint quae iste. Eos quos blanditiis eius amet consequuntur delectus a praesentium! Earum possimus quia sequi. Repudiandae dolore, accusamus quaerat ullam hic cum?</p>
      </div>
      </>
  );
};

export default Svg;
