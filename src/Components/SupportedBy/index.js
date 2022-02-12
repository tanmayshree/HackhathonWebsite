import SectionTitle from "../SectionTitle";
import '../../App.css';

export default function SupportedBy() {
  return (
    <div>
      <SectionTitle title="Supported By" />
      <div className="mt-12">
        <div className="flex flex-col justify-between gap-4 items-center px-4 pb-20 md:flex-row">
          <div style={{ width: "230px", borderRadius: "10px", overflow: "hidden" }}>
            <img src="/Images/about/dsc-placeholder.jpg" className="" alt="" />
          </div>
          <p className="font-secondary text-lg leading-7  text-justify md:text-right md:w-9/12">
            <h4 style={{ color: "#ef4444", fontWeight: "600" }} className="font-secondary text-lg pb-5 md:text-xl">
              National Institute of Technology, Agartala
            </h4>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda tempore temporibus amet numquam obcaecati ut, deserunt laudantium veniam expedita velit id atque beatae tenetur in magni est nam. Ea, ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam consequuntur blanditiis fugit non, fuga repellendus! Culpa totam repellendus ipsum ducimus qui recusandae quidem, nihil sed neque voluptas quo earum!
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-between items-center px-4 pb-20 md:flex-row-reverse">
          <div style={{ width: "230px", borderRadius: "10px", overflow: "hidden" }}>
            <img src="/Images/about/dsc-placeholder.jpg" className="" alt="" />
          </div>
          <p className="font-secondary text-lg leading-7 text-justify md:text-left md:w-9/12">
            <h4 style={{ color: "#ef4444", fontWeight: "600" }} className="font-secondary text-lg pb-5 md:text-xl">
              National Institute of Technology, Agartala
            </h4>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda tempore temporibus amet numquam obcaecati ut, deserunt laudantium veniam expedita velit id atque beatae tenetur in magni est nam. Ea, ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam consequuntur blanditiis fugit non, fuga repellendus! Culpa totam repellendus ipsum ducimus qui recusandae quidem, nihil sed neque voluptas quo earum!
          </p>
        </div>
        <div className="flex justify-between gap-4 flex-col items-center px-4 pb-20 md:flex-row">
          <div style={{ width: "230px", borderRadius: "10px", overflow: "hidden" }}>
            <img src="/Images/about/dsc-placeholder.jpg" className="" alt="" />
          </div>
          <p className="font-secondary text-lg leading-7 text-justify md:w-9/12 md:text-right">
            <h4 style={{ color: "#ef4444", fontWeight: "600" }} className="font-secondary text-lg pb-5 md:text-xl">
              National Institute of Technology, Agartala
            </h4>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda tempore temporibus amet numquam obcaecati ut, deserunt laudantium veniam expedita velit id atque beatae tenetur in magni est nam. Ea, ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam consequuntur blanditiis fugit non, fuga repellendus! Culpa totam repellendus ipsum ducimus qui recusandae quidem, nihil sed neque voluptas quo earum!
          </p>
        </div>
      </div>
    </div>
  );
}
