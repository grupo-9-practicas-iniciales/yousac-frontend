import { Link } from "react-router-dom";
import { Avatar } from "../../";
import { PostInterface } from "../../../api";
import { formatDateToWords } from "../../../utils";
import { useContentStore } from "../../../hooks/useContentStore";

type CardPostProps = {
  post: PostInterface;
  behavior: "default" | "card";
};

export const CardPost = ({ post, behavior }: CardPostProps) => {
  const postDate = formatDateToWords(Date.parse(post.createdAt));
  const { setSelectedPost } = useContentStore();

  return (
    <>
      <div
        className={`flex ${
          behavior === "default"
            ? "space-x-5 mb-5"
            : " space-x-3 md:space-x-4 lg:space-x-5 coursor"
        }`}
      >
        <Avatar user={post.user} />
        <div
          className={`flex flex-col
          space-y-1
            ${
              behavior === "default"
                ? " text-md md:text-lg lg:text-xl"
                : " text-sm lg:text-base text-left w-full font-medium"
            }`}
        >
          <h3>{post.section.course?.name}</h3>
          <p className="text-gray-100">
            {`${post.user.names} ${post.user.lastnames}`}
          </p>
          <p>{`${postDate}`}</p>
        </div>
      </div>
      <h4
        className={`
        ${
          behavior === "default"
            ? "text-xl md:text-2xl lg:text-3xl "
            : "text-md md:text-xl lg:text-2xl "
        }
        font-bold text-center my-5`}
      >
        {post.title}
      </h4>
      <div className="flex flex-col text-xs md:text-sm lg:text-base space-y-2 dark:text-white">
        <p>
          {" "}
          {post.section.course && (
            <>
              {" "}
              <strong>Curso: </strong>{" "}
              {`${post.section.course.code} : ${
                post.section.course.name || ""
              }`}
            </>
          )}
        </p>
        <p>
          {post.section.teacher && (
            <>
              {" "}
              <strong>Catedrático: </strong>
              {post.section.teacher.name}
            </>
          )}
        </p>
        <div className="flex justify-between">
          <p>
            <strong>Sección: </strong>
            {post.section.section}
          </p>
          {behavior === "card" && (
            <Link
              to={`/post`}
              onClick={() => setSelectedPost(post)}
              className="text-info-dark-3"
            >
              Ver publicación
            </Link>
          )}
        </div>
      </div>
      {behavior === "default" && (
        <div className="w-full text-justify my-10 text-sm md:text-base lg:text-xl">
          {post.description}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
          debitis maiores, sed sapiente et magnam, nemo dicta a quae eveniet
          pariatur numquam dolore reiciendis accusamus repudiandae minus natus
          recusandae porro? Aperiam nam voluptate, quam quae facere eos qui
          nesciunt alias, nobis explicabo molestiae delectus quia? Sunt at
          similique inventore, dignissimos, magnam rerum sint corporis harum
          natus tempore sapiente fugit reprehenderit. Id laboriosam nisi, unde
          obcaecati ipsam possimus eum praesentium iste facere debitis
          repellendus totam repellat fugit rem placeat! Ab adipisci ea officia
          ipsum voluptatum quos! Dolore quos adipisci dolorum nihil. Quo
          adipisci sed voluptatem accusantium sapiente, iure numquam obcaecati
          iusto voluptatum in libero nesciunt ad cumque odio quam earum! Beatae
          dolor praesentium esse quibusdam dolores harum tenetur cumque nobis
          repellat? Eius, a expedita quae sequi nihil, laborum voluptatum culpa
          similique obcaecati consectetur corporis sapiente dolor explicabo
          neque cum ad odit ut fuga hic saepe cumque minus porro. Nam, nisi
          optio. Voluptatum, architecto? Temporibus cum exercitationem a
          recusandae dolorum fugiat vel possimus, architecto, veritatis harum
          provident? Ex labore dolores ratione in accusantium et, reprehenderit
          modi ab voluptatibus non voluptates. Id, quod. Totam facilis quo
          recusandae saepe nisi, voluptate nobis assumenda reprehenderit,
          consectetur provident vero, eum suscipit tempore maxime molestiae
          magnam est. Ut sequi itaque iusto veniam voluptate. Dicta doloribus
          unde quia. Animi dolorem quaerat exercitationem molestiae, temporibus
          quia voluptate consectetur ex nam nemo magnam esse cupiditate sint
          repellat reprehenderit inventore, aliquam amet, officia ullam porro?
          Quasi laboriosam commodi soluta tenetur nisi? Aut vero sint delectus
          optio ex aperiam adipisci ducimus esse illo suscipit eius voluptas
          fugiat voluptatum unde, consequatur explicabo dolor consequuntur
          deserunt. Eos vitae numquam aliquam nulla incidunt magnam error!
          Facilis blanditiis praesentium aperiam laboriosam sapiente enim,
          excepturi nisi quasi nemo quisquam quae aliquam, iusto voluptas
          consequatur? Laborum tempora impedit nesciunt, magnam dolorum maxime,
          modi enim reprehenderit alias ea nobis.
        </div>
      )}
    </>
  );
};
