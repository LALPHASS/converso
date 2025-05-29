import Image from "next/image";
import bookmark from '@/public/icons/bookmark.svg';
import clock from '@/public/icons/clock.svg';
import Link from "next/link";
interface CompanionsCardProps {

  id: string;
  name: string;
  topic: string;
  subjet: string;
  duration: number;
  color: string;
}
const CompanionCard = ({id, name, topic, duration, subjet, color}:CompanionsCardProps) => {
  return (
    <article className="companion-card" style={{backgroundColor: color}}>
        <div  className="flex justify-between items-center">
          <div className="subject-badge">
            <span>{subjet}</span>

          </div>
          <button className="companion-bookmark">
            <Image src={bookmark} alt= 'bookmark' width={12.5} height={15}/>
          </button>
        </div>
        <h2 className="text-2xl font-bold">{name}</h2>  
        <p className="text-sm">{topic}</p>
        <div className="flex items-center gap-2">
          <Image src={clock} alt="duration" width={13.5} height={13.5} />
          <p className="text-sm">{duration} mins duration</p>
        </div>
        <Link href={`/companions/${id}`} className="w-full">
          <button className="btn-primary w-full justify-center">
             Launch Lesson
          </button> 
        </Link>
          
    </article>
  )
}

export default CompanionCard