# Problem Note Book

1. first tho bhai jub me LeftSide.jsx ko k content ko page.js me apply kr rha tha matlab show kr rha tha tho content center me a rha tha oss ka reason ye tha k page.js me tailwind css ki calsses jo hy lagi howe thi page.js me jo k content ko center kr rhi thi etc.
2.   ```bash
 <img
      src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    ```
- or yaha pr me img ki jagah image likh rha tha jiss ki wajah se mere pass error show ho rha tha. or aik baat image ko width or height dena hota hy warna aap k pass show nhi hoga image or error milega. kabhi deta hy or kabhi nhi.
3. className="ml-[100px] mt-[50px]" ==> aap iss trha se apni marzi k size etc dene k liye iss squares brackets ka use kr sakty hy q k direc ml-5 etc aap ko wide range me hi sirf cheeze provide krthi hy etc.

4. Link ko next js me use krne k liye aap ko sub se pehly oss ko import krna hota hy details k liye niche dekhe
```bash
import Link from 'next/link'
```
- first iss thra se aap ko link ko import krna hota hy jiss b page k andar aap oss ko use krna chatay ho waha pr.
```bash
<Link href="/dashboard">Home</Link>
```
- or phir aap kuch iss trh ase use kr sakty hy Link ko etc.

5. bhia mere pass pehly icon or phir home ka text nhi a rha tha tho mene bohat thori bohat koshish ki magr nhi ho rha tha magr jub mene oss image icon k andar hi inline-block className diya tho hogaya.
```bash
 <div className='inline-block'>
         <img src="https://static.thenounproject.com/png/3574480-200.png" width={40} height={40} className='inline-block'/>
       <Link href="/dashboard" className=' ml-[6px] mb-[50px]'></Link>
       </div>
  ```

  6. bhai aap iss trha se minus - me b length or margin etc de sakty hy like 

  <div className='inline-block mb-3 ml-[-10px]'> this.
  - jaise mere pass home sahi se nhi  a rha tha etc.

  7. aap color ko 250 ya phir 550 etc nhi de sakty hy bal k aap ko aik pora number hi dena hota hy tub hi phir wo walal color jo hy apply hoga etc. like hover:bg-gray-400



  8. position ko abslute krna zaroor hota hy q k jub aap ye nhi krthy hy tho width ya margin detay time oss k sath dosri wali cheez jo hy aghy piche hoti hy etc. tho phir aap apne oss cheez ko abslute kr sakty hy position etc. simple.
  9. aap ko Link k andar href dena hota hy warna phir aap k pass error show hoga etc.

  10. yaha pr hum ne pre tag ka b use krliya hy jiss me aap jaise hi content likthy hy wo wese hi print krdeta hy agr oss me spaces ho ya phir na ho etc. ye html ka tag hy etc. <pre> <p>Hello     world </p> </pre>

  11. bhai mere pass problem a rhi thi file base routing me tho iss ka solution ye tha k aap apne app folder me jiss b naam se folder banatay hy oss k andar file ka naam aap k pass page.jsx hona chaye hy export or function name me b tub hi phir aap routing me oss folder ko use krpaoge for example.
  ![alt text](image.png)
  - jaise first mene yaha pr app/blog/page.jsx banaya hy or ab me iss blog k folder ko routing me easily use kr sakta ho like.
  ```bash
  <Link href="/blog" className='ml-[6px] mb-[50px]'>Explore</Link>
  ```
  - kuch iss trha se aap oss folder ko phir use kr sakty hy.


  Final Design

  ![alt text](image-1.png)