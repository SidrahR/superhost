import Header from "@/components/Header";

const PageDynamic = ({ params }: { params: { pageName: string } }) => {
  const currentPage = params.pageName;
  return (
    <div className="">
      <Header currentPage={currentPage}></Header>
      <h1 className="uppercase text-center text-2xl my-6">{currentPage}</h1>
      <p className="w-2/3 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        laudantium perspiciatis ea eaque voluptates adipisci sit aut enim
        accusamus, fugit eius ipsa voluptatum voluptatem amet rerum, maxime
        quaerat accusantium, cum consequatur tempora optio sequi harum ducimus.
        Cum quia aperiam ipsam iure quasi earum veritatis. Accusamus illum porro
        provident unde eum neque dolor, maxime sint id non excepturi, delectus
        quasi natus aperiam sequi esse dolorem earum ducimus, autem ea
        praesentium dolore inventore fugiat? Inventore blanditiis, hic modi
        voluptatem quam magnam illum impedit rerum nobis corrupti doloribus
        excepturi fugit aperiam commodi voluptas omnis culpa error reiciendis
        atque nisi. Laudantium asperiores esse iure ad itaque facilis modi amet
        quos cupiditate pariatur. Temporibus doloremque molestiae debitis,
        ratione adipisci laboriosam ab sint hic officiis fugiat consectetur quae
        aliquid aliquam omnis unde, fuga harum rerum voluptatum illo repellendus
        iste vitae, dolor provident? Labore ex corrupti nesciunt dignissimos
        magnam accusamus magni, explicabo iste quaerat autem dicta quos debitis
        voluptatibus aspernatur mollitia sequi maxime nemo alias veniam iure
        incidunt a similique? Modi, ut perspiciatis. Tempora eos necessitatibus
        voluptatem ratione praesentium reprehenderit suscipit laboriosam nam,
        harum quia impedit. Eum atque dicta neque consectetur at aliquam
        impedit? Quo accusamus minima in, suscipit beatae voluptatibus aliquid
        magnam, iure veniam mollitia animi atque reiciendis, omnis doloremque.
        Consequuntur vitae est soluta fugiat magni repudiandae, dolorum incidunt
        aut nisi, commodi eos ab optio hic laborum perspiciatis fuga tempore,
        possimus delectus fugit quas ipsa! Voluptatem, quos. Atque excepturi
        explicabo, ipsam quos neque optio officiis consectetur voluptatibus, rem
        amet possimus magni! Delectus debitis quibusdam quos at a, quae eligendi
        laborum possimus. Vero earum numquam atque excepturi. Dolor libero quam
        est eaque ut quos ab fuga ratione doloremque ipsa. Cum cupiditate iure
        quae dolor consectetur quam nulla porro voluptate tempore, deserunt
        aliquam, officiis error possimus recusandae saepe! Magni mollitia
        corrupti consequuntur rerum earum expedita minima fuga quos veritatis
        asperiores ex, optio porro, possimus voluptatibus minus enim harum
        deserunt. Distinctio commodi dolore corrupti animi vero eius, quis
        cupiditate nulla, in quas odit, asperiores est sed! Recusandae commodi
        eius nobis maiores? Necessitatibus impedit qui saepe voluptatem aliquam
        cum laudantium eos blanditiis suscipit, vitae voluptates quam ipsum ab
        aut reprehenderit itaque, aliquid tempora dolor recusandae in eligendi
        tempore nobis hic. Odit repudiandae fugiat, doloremque fugit ullam odio.
        Deserunt sapiente laboriosam non aliquam numquam. At porro suscipit
        numquam tempore! Distinctio aperiam soluta optio itaque et sunt illo,
        doloremque est. Harum et quasi minima inventore? Quaerat ea delectus
        similique et repellat qui cupiditate velit, minus harum dolores ab ullam
        rerum iusto ex doloribus. Quia, iusto velit ad similique, ipsa
        perferendis blanditiis, maxime quis dicta esse magnam hic distinctio!
        Impedit, voluptatibus est! Aut voluptatum dolore dolorum quo error porro
        impedit officia magni totam. Eligendi dicta rem aliquid nemo aliquam
        mollitia, quaerat cumque nihil harum commodi quas delectus iste
        reiciendis hic recusandae ipsa atque dolorum sed a ut officiis qui
        necessitatibus obcaecati. Enim voluptate reiciendis temporibus facere
        velit culpa. Saepe natus debitis repellendus, doloribus optio ducimus
        dolorem ex rem eligendi qui. Non asperiores maxime atque iusto quae ab
        in possimus incidunt distinctio perspiciatis. Maiores.
      </p>
    </div>
  );
};

export default PageDynamic;
