import { Command, CommandRun, EtherealPermissioned } from "@rbxts/ethereal-for-plugins";
import { peek } from "@rbxts/fusion";
import Sift from "@rbxts/sift";
import { scope } from "scope";

export interface LibCommand extends Command {}

// export interface CommandSource {
// 	name: string;
// 	root: boolean;
// 	commands: Command[];
// }

// export const BUILTIN_COMMANDS: CommandSource[] = [
// 	{
// 		name: "Misc",
// 		root: true,
// 		commands: [helloWorld],
// 	},
// ];

export const commands = scope.Value<Command[]>([]);

export function createCommandRun(): CommandRun {
	return Sift.Dictionary.freezeDeep({
		selectedTower: undefined,

		promptColor3(placeholderLabel, initial) {
			throw "not yet implemented";
		},

		promptColorSequence(placeholderLabel, initial) {
			throw "not yet implemented";
		},

		promptString(placeholderLabel, initial) {
			throw "not yet implemented";
		},

		hideMainView() {
			throw "not yet implemented";
		},
	} satisfies CommandRun);
}

export function runCommand(command: Command) {
	command.run(createCommandRun());
}

export const tempFakePermissioned = {
	register: (command) => {
		peek(commands).push(command);
		commands.set(peek(commands));
	},
	predicates: {} as never,
} satisfies EtherealPermissioned;
