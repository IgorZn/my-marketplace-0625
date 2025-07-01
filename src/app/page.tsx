import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Progress} from "@/components/ui/progress";
import {Textarea} from "@/components/ui/textarea";
import {Checkbox} from "@/components/ui/checkbox";


export default function Home() {
    return (
        <div className="flex flex-col gap-y-4 m-2">
            <div>
                <Button>
                    Hello World
                </Button>
            </div>
            <div>
                <Input placeholder="Hello World" />
            </div>
            <div>
                <Progress value={50} />
            </div>
            <div>
                <Textarea placeholder={'Im a textarea'} />
            </div>
            <div>
                <Checkbox />
            </div>
        </div>
    );
}
