import type { FC, PropsWithChildren } from "react";
import { Icons } from "./Icons";
import Image from "next/image";

interface IMockDiscordUi extends PropsWithChildren {}

const MockDiscordUi: FC<IMockDiscordUi> = ({ children }) => {
  return (
    <div className="flex min-h-[800px] w-full max-w-[1200px] bg-[#202225] text-white rounded-lg overflow-hidden shadow-xl">
      <div className="hidden sm:flex w-[72px] bg-discord-background py-3 flex-col items-center">
        <div className="size-12 bg-discord-brand-color rounded-2xl flex items-center justify-center mb-2 hover:rounded-xl transition-all duration-200">
          <Icons.discord className="size-3/5 text-white" />
        </div>

        <div className="w-8 h-[2px] bg-discord-background rounded-full my-2" />

        {[...Array(5)].map((_, i) => (
          <div
            className="size-12 bg-discord-background rounded-3xl flex items-center justify-center mb-3 hover:rounded-xl transition-all duration-200 hover:bg-discord-brand-color cursor-not-allowed"
            key={i}
          >
            <span className="text-lg font-semibold text-gray-400">
              {String.fromCharCode(65 + i)}
            </span>
          </div>
        ))}

        <div className="size-12 bg-discord-background mt-auto rounded-3xl flex items-center justify-center mb-3 hover:rounded-xl transition-all duration-200 group hover:bg-[#3ba55c] cursor-not-allowed">
          <Icons.plusCircle className="text-[#3ba55c] group-hover:text-white" />
        </div>
      </div>

      <div className="hidden md:flex w-60 bg-[#2f3136] flex-col">
        <div className="px-4 h-16 border-b border-[#202225] flex items-center shadow-sm">
          <div className="w-full bg-[#202225] text-sm rounded px-2 h-8 flex items-center text-gray-500 cursor-not-allowed">
            Find or start a conversation
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pt-4">
          <div className="px-2 mb-4">
            <div className="flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393c43] text-[#dcddde] cursor-not-allowed">
              <Icons.userCircle className="mr-4 size-8 text-[#b9bbbe]" />
              <span className="font-medium text-sm">Friends</span>
            </div>

            <div className="flex items-center text-sm px-2 py-1.5 rounded hover:bg-[#393c43] text-[#dcddde] cursor-not-allowed">
              <Icons.inbox className="mr-4 size-8 text-[#b9bbbe]" />
              <span className="font-medium text-sm">Friends</span>
            </div>
          </div>

          <div className="px-2 mb-4">
            <h3 className="text-xs font-semibold text-[#8e9297] px-2 mb-2 uppercase">
              Direct Messages
            </h3>

            <div className="flex items-center px-2 py-1.5 rounded bg-[#393c43] text-white cursor-pointer">
              <Image
                src="/brand-asset-profile-picture.png"
                alt="PingPanda Avatar"
                width={32}
                height={32}
                className="object-cover rounded-full mr-3"
              />
              <span className="font-medium">PingPanda</span>
            </div>

            <div className="my-1 space-y-px">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center px-2 py-1.5 rounded text-gray-600 cursor-not-allowed"
                >
                  <div className="size-8 rounded-full bg-discord-background mr-3" />
                  <span className="font-medium">User {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-2 bg-[#292b2f] flex items-center">
          <div className="size-8 rounded-full bg-brand-700 mr-2" />
          <div className="flex-1">
            <p className="text-sm font-medium text-white">You</p>
            <p className="text-xs text=[#b9bbbe] flex items-center">
              @your_account
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Icons.mic className="size-5 text-[#b9bbbe] hover:text-white cursor-pointer" />
            <Icons.headphones className="size-5 text-[#b9bbbe] hover:text-white cursor-pointer" />
            <Icons.cog className="size-5 text-[#b9bbbe] hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="h-16 bg-[#36393f] flex items-center px-4 shadow-sm border-b border-[#202225]">
          <div className="md:hidden mr-4">
            <Icons.menu className="size-6 text-[#b9bbbe] hover:text-white cursor-pointer" />
          </div>

          <div className="flex items-center">
            <div className="relative">
              <Image
                src="/brand-asset-profile-picture.png"
                alt="PingPanda Avatar"
                width={40}
                height={40}
                className="object-cover rounded-full mr-3"
              />
              <div className="absolute bottom-0 right-3 size-3 bg-green-500 rounded-full border-2 border-[#36393f]" />
            </div>
            <p className="font-semibold text-white">PingPanda</p>
          </div>
          <div className="ml-auto flex items-center space-x-4 text-[#b9bbbe]">
            <Icons.phone className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <Icons.video className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <Icons.pin className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <Icons.userCircle className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <Icons.search className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <Icons.inbox className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            <Icons.helpCircle className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 bg-discord-background flex flex-col-reverse">
          {children}
        </div>

        <div className="p-4">
          <div className="flex items-center bg-[#40444b] rounded-lg p-1">
            <Icons.plusCircle className="mx-3 text-[#b9bbbe] hover:text-white cursor-not-allowed" />
            <input
              readOnly
              type="text"
              placeholder="Message @PingPanda"
              className="flex-1 bg-transparent py-2.5 px-1 text-white placeholder-[#72767d] focus:outline-none cursor-not-allowed"
            />
            <div className="flex items-center space-x-3 mx-3 text-[#b9bbbe]">
              <Icons.gift className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
              <Icons.sticker className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
              <Icons.smile className="size-5 hover:text-white cursor-not-allowed hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockDiscordUi;
