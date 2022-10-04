import { ALL_GENRE, EMPTY_STRING } from "./constant";
export const genreOptions = ["all", "novel", "sci-fi", "fantasy", "romance"];

export const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    slug: "the-great-gatsby",
    genre: "novel",
    description:
      "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
    thumbnailImg:
      "https://www.collegefashion.net/wp-content/uploads/2019/01/greatgatsbycover1.jpg",
    coverImg:
      "https://www.businessinsider.in/thumb.cms?msid=21136987&width=1200&height=900",
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    slug: "the-fault-in-our-stars",
    genre: "romance",
    description:
      "The Fault in Our Stars is a novel by John Green. It is his fourth solo novel, and sixth novel overall. It was published on January 10, 2012. The title is inspired by Act 1, Scene 2 of Shakespeare's play Julius Caesar, in which the nobleman Cassius says to Brutus: 'Men at some time were masters of their fates, / The fault, dear Brutus, is not in our stars, / But in ourselves, that we are underlings.' The story is narrated by Hazel Grace Lancaster, a 16-year-old girl with thyroid cancer that has affected her lungs. Hazel is forced by her parents to attend a support group where she subsequently meets and falls in love with 17-year-old Augustus Waters, an ex-basketball player, amputee, and survivor of osteosarcoma.",
    thumbnailImg:
      "https://upload.wikimedia.org/wikipedia/en/a/a9/The_Fault_in_Our_Stars.jpg",
    coverImg:
      "https://www.scrolldroll.com/wp-content/uploads/2021/02/Best-Quotes-From-The-Fault-In-Our-Stars-25.png",
  },
  {
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    slug: "the-left-hand-of-darkness",
    genre: "sci-fi",
    description:
      "The Left Hand of Darkness is a science fiction novel by U.S. writer Ursula K. Le Guin. Published in 1969, it became immensely popular, and established Le Guin's status as a major author of science fiction.[6] The novel is set in the fictional Hainish universe as part of the Hainish Cycle, a series of novels and short stories by Le Guin, which she introduced in the 1964 short story 'The Dowry of Angyar'. It was fourth in sequence of writing among the Hainish novels, preceded by City of Illusions, and followed by The Word for World Is Forest",
    thumbnailImg:
      "https://upload.wikimedia.org/wikipedia/en/8/88/TheLeftHandOfDarkness1stEd.jpg",
    coverImg: "https://image.pbs.org/poster_images/assets/UKLGLeftHand.png",
  },
  {
    title: "The Love Hypothesis",
    author: "Ali Hazelwood",
    slug: "the-love-hypothesis",
    genre: "romance",
    description:
      "As a third-year Ph.D. candidate, Olive Smith doesn't believe in lasting romantic relationships--but her best friend does, and that's what got her into this situation. Convincing Anh that Olive is dating and well on her way to a happily ever after was always going to take more than hand-wavy Jedi mind tricks: Scientists require proof. So, like any self-respecting biologist, Olive panics and kisses the first man she sees.",
    thumbnailImg: "https://covers.openlibrary.org/b/id/12625291-L.jpg",
    coverImg:
      "https://i2-prod.mylondon.news/incoming/article21958674.ece/ALTERNATES/s1200/0_IMG_6481.jpg",
  },
  {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    slug: "the-lord-of-the-rings",
    genre: "fantasy",
    description:
      "The Lord of the Rings is an epic[1] high-fantasy novel[a] by English author and scholar J. R. R. Tolkien. Set in Middle-earth, intended to be Earth at some time in the distant past, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million copies sold. The title refers to the story's main antagonist, the Dark Lord Sauron, who in an earlier age created the One Ring to rule the other Rings of Power given to Men, Dwarves, and Elves, in his campaign to conquer all of Middle-earth. From homely beginnings in the Shire, a hobbit land reminiscent of the English countryside, the story ranges across Middle-earth, following the quest to destroy the One Ring mainly through the eyes of the hobbits Frodo, Sam, Merry and Pippin.",
    thumbnailImg:
      "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
    coverImg:
      "https://www.originalposter.co.uk/uploads/171764552593232_mainphotos.jpg",
  },
];

export function getBookByslug(slug) {
  for (let book of books) {
    if (book.slug === slug) return book;
  }
  return null;
}

export function filterBooks(originalBooks, search, genre) {
  let filteredBooks = originalBooks;

  if (genre === ALL_GENRE && search === EMPTY_STRING) {
    return filteredBooks;
  }

  if (genre !== ALL_GENRE) {
    filteredBooks = originalBooks.filter((book) => book.genre === genre);
  }

  if (search !== EMPTY_STRING) {
    const keyword = search.toLowerCase();
    filteredBooks = filteredBooks.filter((book) =>
      book.title.toLowerCase().includes(keyword)
    );
  }

  return filteredBooks;
}
