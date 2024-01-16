import './App.css'
const Sticky = () => {
  return (
    <div className='mt-28'>
    <div className="para" style={{
      background: "linear-gradient(90deg,#ff8100 0%, #ff5300 80%)",
      height:"250px"

      }}><p className="p-8 pt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto aoloremque, cum nobis mollitia voluptatem, nemo veniam? Ducimus molestias illo quas laborum, iure libero inventore nemo saepe voluptas sequi, quis fuiatis eveniet? Voluptatibus placeat ipsum facilis reiciendis? Laborum, dolore? Tempora beatae suscipit possimus deleniti alias? Rem aliquid nemo nobis hic deleniti quo, numquam minima accusamus corporis accusantium ducimus dolor dignissimos impedit, explicabo dicta quos ipsa iusto. Distinctio voluptatibus eum hic a ullam! Obcaecati alias, consequuntur impedit molestias unde eaque, magnam distinctio tempore iste ducimus debitis consectetur odio officia!</p>
    </div>
    <div className="flex flex-row px-24 top-0">
      <div className="w-1/2 ">

        <div
          style={{
            height: "200px",
            color: "white",
            backgroundColor: "black"
          }}
          className="flex flex-col justify-center items-center"
        ><p>Header</p>
        </div>

        <div className="flex flex-col justify-center items-center sticky top-0 h-[400px] bg-lime-600 "><h1>1 div 1</h1></div>
        <div className="flex flex-col justify-center items-center sticky top-0 h-[400px] bg-red-600 "><h1>2 div 1</h1></div>
        <div className="flex flex-col justify-center items-center sticky top-0 h-[400px] bg-green-600 "><h1>3 div 1</h1></div>
        <div className="flex flex-col justify-center items-center sticky top-0 h-[400px] bg-pink-600 "><h1>4 div 1</h1></div>
        <div className="flex flex-col justify-center items-center sticky top-0 h-[400px] bg-yellow-600 "><h1>5 div 1</h1></div>
        <div className="flex flex-col justify-center items-center sticky top-0 h-[400px] bg-black "><h1>6 div 1</h1></div>
        <div className="flex flex-col justify-center items-center sticky top-0 h-[400px] bg-lime-600 "><h1>7 div 1</h1></div>

        <div
          style={{
            height: "200px",
            color: "white",
            backgroundColor: "black"
          }}
          className="flex flex-col justify-center items-center"
        ><p>Footer</p>
        </div>

      </div>

      <div className="w-1/2 p-12"style={{background: "linear-gradient(45deg, #FF5733, #33FF57)"
}} >
        <p className=" sticky top-6">
          <p className="text-3xl pt-20">salman furis</p>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, harum doloremque illo, accusantium iusto eos nihil tenetur repellat omnis saepe recusandae obcaecati ad sint ipsum unde ipsam voluptas tempore veritatis. Ullam recusandae omnis autem blanditiis maiores? Modi ullam molestiae autem. Tenetur temporibus sit esse doloribus!

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, harum doloremque illo, accusantium iusto eos nihil tenetur repellat omnis saepe recusandae obcaecati ad sint ipsum unde ipsam voluptas tempore veritatis. Ullam recusandae omnis autem blanditiis maiores? Modi ullam molestiae autem. Tenetur temporibus sit esse doloribus!
          
          </p>
      </div>
    </div>

<div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ducimus libero vitae quisquam, maiores asperiores magni reiciendis error reprehenderit vel a architecto suscipit minus. Nihil dicta consectetur porro nobis veniam error numquam, mollitia officia ipsum culpa, minima neque va, quos adipisci velit a quidem totam esse deleniti. Molestiae, facilis ut? Non, delectus. Labore, aut a, soluta molestiae quaerat voluptatem error rerum accusantium quisquam omnis tempora facere nostrum porro asperiores molestias consequatur dolorem illo sapiente iure quasi aspernatur? Exercitationem perspiciatis error aliquid a architecto tempore rem quae fugiat quam repellat voluptatibus fuga quibusdam molestiae, aperiam assumenda inventore delectus consequuntur autem, cum cupiditate fugit quod. Distinctio quasi molestias repudiandae maiores quae est veritatis odit totam iste. Quas placeat eum nemo omnis, sed illo dolor vitae doloribus! Dolorem ipsam et eum veniam repudiandae, ullam, non officia voluptatibus nemo doloribus, optio ratione sapiente eos fugit accusantium quoeat, et nesciunt vel sunt accusamus optio magni mollitia eveniet ducimus a accusantium corporis tempore in itaque officiis. Sed in, necessitatibus corrupti harum ab ullam quis eos, atque reiciendis vel facere illo voluptates soluta ut? Vel nisi quas maxime id at eligendi fugiat aliquam facere, asperiores ullam totam et? Ducimus sint obcaecati asperiores eos ipsam rem mollitia corrupti repellendus a maiores. Magni nulla placeat quisquam fugit ullam dicta molestias officia id! Temporibus, ipsum, officia sequi pariatur modi totam ab ad esse mollitia non maxime fugiat cupiditate nihil error dolore impedit corrupti quia dolorem? Quam, sed! Quibusdam, laudantium quam, sit iure ea, velit harum expedita sint ratione fugiat unde dicta minus molestiae ducimus facere qui non necessitatibus praesentium. Velit ad at voluptatum numquam molestiae exercitationem quod dicta! Maiores pariatur asperiores voluptate dignissimos esse non, repellendus placeat consequuntur, numquam voluptates facere doloremque laboriosam fugiat voluptatibus quisquam perspiciatis? Veniam quis culpa offielit, nisi eos, fuga necessitatibus perspiciatis. Et dolore quasi dolorem maxime quibusdam excepturi cumque nobis quae maiores quod quisquam, rem qui exercitationem possimus. Necessitatibus itaque nesciunt assumenda perspiciatis laboriosam, in dolores explicabo animi asperiores expedita vero odio. Officiis!</p></div>


    </div>
  );
};

export default Sticky;